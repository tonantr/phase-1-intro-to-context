function createEmployeeRecord(arr) {
    const emp = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return emp
};

function createEmployeeRecords(arr) {
    let newEmp = []
    for (let i = 0; i < arr.length; i++) {
        newEmp.push(createEmployeeRecord(arr[i]))
    }
    return newEmp
};

function createTimeInEvent(emp, date) {
    let dateTime = date.split(' ')
    let element = emp.timeInEvents.length
    emp.timeInEvents[element] = {
        type: 'TimeIn',
        hour: parseInt(dateTime[1]),
        date: dateTime[0]
    }
    return emp
};

function createTimeOutEvent(emp, date) {
    let dateTime = date.split(' ')
    let element = emp.timeOutEvents.length
    emp.timeOutEvents[element] = {
        type: 'TimeOut',
        hour: parseInt(dateTime[1]),
        date: dateTime[0]
    }
    return emp
};

function hoursWorkedOnDate(emp, date) {
    let hoursWork = 0
    for (let i = 0; i < emp.timeInEvents.length; i++) {
        if (emp.timeInEvents[i].date === date && emp.timeOutEvents[i].date === date) {
            hoursWork = (emp.timeOutEvents[i]['hour'] - emp.timeInEvents[i]['hour']) * .01
            return hoursWork
        }
    }
};

function wagesEarnedOnDate(emp, data) {
    let hoursWork = hoursWorkedOnDate(emp, data)
    return hoursWork * emp.payPerHour
};

function allWagesFor(emp) {
    let payOwed = 0
    for (let i = 0; i < emp.timeInEvents.length; i++) {
        let wagesEarned = wagesEarnedOnDate(emp, emp.timeInEvents[i]['date'])
        payOwed = payOwed + wagesEarned
    }
    return payOwed
};

function calculatePayroll(emps) {
    let sumAllWages = 0
    let allWages = 0
    for (let i = 0; i < emps.length; i++) {
        allWages = allWagesFor(emps[i])
        sumAllWages = sumAllWages + allWages
    }
    return sumAllWages
};



