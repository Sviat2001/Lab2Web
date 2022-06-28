let alarms = []
let timeOuts = []

function createAlarm() {
    const year = document.getElementById('year')
    const month = document.getElementById('month')
    const day = document.getElementById('day')
    const hour = document.getElementById('hour')
    const minute = document.getElementById('minute')
    var currentDate = new Date()

    const date = new Date()
    date.setHours(hour.value)
    date.setMinutes(minute.value)
    date.setSeconds(0)
    date.setMilliseconds(0)
    alarms.push(date)
        
    console.log(date - currentDate)
    console.log(date)
    console.log(currentDate)
    timeOuts.push(setTimeout(alarm, (date - currentDate)))
    showAlarms();
}

function showAlarms() {
    let ac = document.getElementById('ac') 

    
    var id = 0
    var result = '<br><p>'
    for(let a of alarms) {
        result += 'Id : ' + id + ' Date ' + a + '<br>'
        id += 1 
    }
    result += '</p>'
    ac.innerHTML = result
}

function upDate() {
    var index
    for(let a of alarms) {
        if(new Date() > a) {
            index = alarms.indexOf(a)
            alarms.splice(index, 1)
            clearTimeout(timeOuts[index])
            timeOuts.splice(index, 1)
        }
    }



}

function deleteAlarm() {
    const id = document.getElementById('id')
    alarms.splice(id.value, 1)
    clearTimeout(timeOuts[id.value])
    timeOuts.splice(id.value, 1)
    showAlarms()
}

function alarm() {
    alert('Warning ! Clock Alarm !')
    upDate()
    showAlarms()
}
