let hourjs = window.document.getElementById('hour')

let minutejs = window.document.getElementById('minutes')

let secondjs = window.document.getElementById('seconds')

let ampmjs = window.document.getElementById('ampm')

function updateClock() {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    let ampm = 'AM'

    if (hour > 12) {
        hour = hour - 12
        ampm = 'PM'
    }

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second

    hourjs.innerText = hour
    minutejs.innerText = minute
    secondjs.innerText = second
    ampmjs.innerText = ampm
    setTimeout(() => {
        updateClock()
    }, 1000)
}
updateClock()