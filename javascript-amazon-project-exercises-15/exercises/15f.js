export default function isWeekend(date) {
    const dayOfTheWeek = date.format('dddd');
    return dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday'
}

export function hello() {
    console.log('hello');
}