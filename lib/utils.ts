import { formatDistanceToNowStrict } from 'date-fns'

export default function distanceToNow(dateTime: Date) {
    return formatDistanceToNowStrict(dateTime, {
        addSuffix: true,
    })
}
