import md from 'markdown-it';

export default async function markdownToHtml(markdown) {
    return md().render(markdown);
}
