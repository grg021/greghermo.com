import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

export default function distanceToNow(dateTime: Date) {
    return formatDistanceToNowStrict(dateTime, {
        addSuffix: true,
    })
}
