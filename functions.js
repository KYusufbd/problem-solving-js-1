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

// Just for testing purpose. Won't be submitted.
console.log(sendNotification("yfaka001@gmail.com"));