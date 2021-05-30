const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setTime() {
    const time = new Date()

    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    hour.style.transform = `translate(-50%, -100%) rotate(${map(hoursForClock, 0, 11, 0, 360)}deg)`
    minute.style.transform = `translate(-50%, -100%) rotate(${map(minutes, 0, 59, 0, 360)}deg)`
    second.style.transform = `translate(-50%, -100%) rotate(${map(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class = "circle">${date}</span`


}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const map = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

setTime()
setInterval(setTime, 1000)