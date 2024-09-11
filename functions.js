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

function checkDigitsInName (name) {
    if (typeof name === 'string') {
        return /[0-9]/.test(name);
    }
    else {
        return "Invalid Input";
    }
}

// Just for testing purpose. Won't be submitted.
console.log(checkDigitsInName("Kazi Yusuf"));