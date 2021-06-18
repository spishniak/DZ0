// 1. Create self-invoked anonymous function, that will return if the day after tomorrow is odd, or even.
// // HINT: function accepts one argument: new Date(); 
// // output example 15.06.2021, 11:19:22 is odd date

const result = (function (date) {
    const day = date.getDate() + 2
    const month = date.getMonth()
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const second = date.getSeconds()
    const fullDate = `${day}.${month}.${year}, ${hours}:${minutes}:${second} `

    if (day % 2 === 0) {
        return `${fullDate}, even `
    } else {
        return `${fullDate}, odd`
    }
})(new Date());

console.log(result)
