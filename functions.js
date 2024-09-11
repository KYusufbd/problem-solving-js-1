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

// Just for testing purpose. Not will be submitted.
console.log(calculateTax(6000, -1500));