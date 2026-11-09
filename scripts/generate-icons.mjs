// Renders the favicons from design/greghermo-logo.png (a round portrait on white). Run after
// replacing the source image:
//   npm run icons
// Uses sharp, which ships with Next.js.
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const source = path.join(root, 'design', 'greghermo-logo.png')

// 1. Make the white background transparent. Only near-white pixels connected to the image edge
//    are removed, so whites inside the portrait (teeth, eyes) stay. Pixels on the boundary keep a
//    partial alpha and have the white blended out of their colour, so the edge stays smooth.
const { data, info } = await sharp(source).removeAlpha().raw().toBuffer({ resolveWithObject: true })
const { width, height } = info
const WHITE = 170 // min channel at or above this counts as background
const rgba = Buffer.alloc(width * height * 4)
const background = new Uint8Array(width * height)
const minChannel = (p) => Math.min(data[p * 3], data[p * 3 + 1], data[p * 3 + 2])

const stack = []
for (let x = 0; x < width; x++) stack.push(x, (height - 1) * width + x)
for (let y = 0; y < height; y++) stack.push(y * width, y * width + width - 1)
while (stack.length) {
  const p = stack.pop()
  if (background[p] || minChannel(p) < WHITE) continue
  background[p] = 1
  const x = p % width
  if (x > 0) stack.push(p - 1)
  if (x < width - 1) stack.push(p + 1)
  if (p >= width) stack.push(p - width)
  if (p < width * (height - 1)) stack.push(p + width)
}

let x0 = width, y0 = height, x1 = 0, y1 = 0
for (let p = 0; p < width * height; p++) {
  const alpha = background[p] ? (255 - minChannel(p)) / (255 - WHITE) : 1
  const a = Math.max(0, Math.min(1, alpha))
  for (let c = 0; c < 3; c++) {
    const v = data[p * 3 + c]
    rgba[p * 4 + c] = a > 0 ? Math.max(0, Math.min(255, Math.round((v - (1 - a) * 255) / a))) : 0
  }
  rgba[p * 4 + 3] = Math.round(a * 255)
  if (a > 0.5) {
    const x = p % width, y = Math.floor(p / width)
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y)
  }
}

// 2. Crop to a square around the portrait so it fills the icon.
const side = Math.max(x1 - x0, y1 - y0) + 1
const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2
const pad = Math.ceil(side * 0.02)
const canvas = side + pad * 2
// Pad first (in its own pass: sharp runs extract before extend within one pipeline) so the crop
// can never fall outside the image.
const padded = await sharp(rgba, { raw: { width, height, channels: 4 } })
  .extend({ top: canvas, bottom: canvas, left: canvas, right: canvas, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer()
const portrait = await sharp(padded)
  .extract({
    left: Math.round(cx - canvas / 2) + canvas,
    top: Math.round(cy - canvas / 2) + canvas,
    width: canvas,
    height: canvas,
  })
  .png()
  .toBuffer()

const render = (size, background) => {
  let img = sharp(portrait).resize(size, size, { kernel: 'lanczos3' })
  if (background) img = img.flatten({ background })
  return img.png().toBuffer()
}

// iOS fills transparency with black, so the touch icon gets a white background like the source.
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), await render(180, '#ffffff'))
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), await render(192))
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), await render(512))

// 3. favicon.ico with PNG-encoded 16, 32 and 48 px images.
const sizes = [16, 32, 48]
const images = await Promise.all(sizes.map((s) => render(s)))
const header = Buffer.alloc(6 + 16 * sizes.length)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(sizes.length, 4)
let offset = header.length
sizes.forEach((size, i) => {
  const entry = 6 + 16 * i
  header.writeUInt8(size, entry) // width
  header.writeUInt8(size, entry + 1) // height
  header.writeUInt8(0, entry + 2) // palette
  header.writeUInt8(0, entry + 3) // reserved
  header.writeUInt16LE(1, entry + 4) // colour planes
  header.writeUInt16LE(32, entry + 6) // bits per pixel
  header.writeUInt32LE(images[i].length, entry + 8)
  header.writeUInt32LE(offset, entry + 12)
  offset += images[i].length
})
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), Buffer.concat([header, ...images]))

console.log('Wrote favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png')
