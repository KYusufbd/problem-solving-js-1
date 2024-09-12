// Problem-01 : Tax Calculator
function calculateTax(income, expenses) {
    if (income >=0 && expenses >= 0) {
        let tax;
        income > expenses ? tax = (income - expenses) * .2 : tax=0;
        return tax;
    }
    else {
        return "Invalid Input";
    }
}

// Problem 02 : Notification Generator
function sendNotification(email) {
    if (email.includes('@')) {
        const userName = email.slice(0, email.indexOf("@"));
        const domainName = email.slice(email.indexOf("@") + 1);
        return `${userName} sent you an email from ${domainName}`;
    }
    else {
        return "Invalid Email";
    }
}

// Problem-03: Checking Digits Inside a Name
function checkDigitsInName(name) {
    if (typeof name === 'string') {
        return /[0-9]/.test(name);
    }
    else {
        return "Invalid Input";
    }
}

// Problem 04 : Calculate Admission Final Score
function calculateFinalScore(obj) {
    if (typeof obj === "object") {
        let finalScore = obj.testScore + obj.schoolGrade;
        obj.isFFamily ? finalScore += 20 : finalScore += 0;
        if (finalScore >= 80) {
            return true;
        }
        else {
            return false;
        };
    }
    else {
        return "Invalid Input";
    };
}

// Problem 05:  Predict Avarage Waiting Time
function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
        let totalWaitingTimes = 0;
        for (let i = 0; i < waitingTimes.length; i++) {
            totalWaitingTimes += waitingTimes[i];
        };
        const avgWaitingTimes = totalWaitingTimes / waitingTimes.length;
        const peopleBeforeHer = serialNumber - waitingTimes.length - 1;
        return parseInt(avgWaitingTimes * peopleBeforeHer);
    }
    else {
        return "Invalid Input";
    }
}

// Just for testing purpose. Won't be submitted.
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));