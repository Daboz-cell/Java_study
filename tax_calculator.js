function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    if (grossSalary >= 100000) return 1700;
}

function calculateNSSF(grossSalary) {
    if (grossSalary < 18000) {
        return 0;
    }
    else {
        return grossSalary * 0.06;
    }
}

function calculateNHDF(grossSalary) {
    return grossSalary * 0.015;
}
function calculateTaxableIncome(grossSalary, nssf, nhdf, nhif) {

    return grossSalary - (nssf + nhdf + nhif);
}
function calculatePAYEE(taxableIncome) {
    let tax = 0
    let personalRelief = 24000
    const minimumTaxableIncome = 24001;

    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.1;
    } else if ((taxableIncome > 24000) && (taxableIncome <= 32333)) {
        tax = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } else if ((taxableIncome > 32333) && (taxableIncome <= 500000)) {
        tax = (24000 * 0.1) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.3);
    } else if ((taxableIncome > 500000) && (taxableIncome <= 800000)) {
        tax = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((taxableIncome - 500000) * 0.325);
    } else {
        tax = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((taxableIncome - 800000) * 0.35);
    }
    tax = tax - personalRelief
    return tax
}
function calculateNetSalary(grossSalary, nhif, nssf, nhdf, payee) {

    return grossSalary - (nhif + nssf + nhdf + payee);
}
function taxCalculator() {
    while (true) {

        let basicSalary = parseFloat(prompt("Enter basic salary (KES):"));
        let benefits = parseFloat(prompt("Enter benefits (KES):"));
        let grossSalary = calculateGrossSalary(basicSalary, benefits);
        let nhif = calculateNHIF(grossSalary);
        let nssf = calculateNSSF(grossSalary);
        let nhdf = calculateNHDF(grossSalary);
        let taxableIncome = calculateTaxableIncome(grossSalary, nssf, nhdf, nhif);
        let payee = calculatePAYEE(taxableIncome);
        let netSalary = calculateNetSalary(grossSalary, nhif, nssf, nhdf, payee);
        console.log("Basic Salary: KES " + basicSalary.toFixed(2));
        console.log("Benefits: KES " + benefits.toFixed(2));
        console.log("Gross Salary: KES " + grossSalary.toFixed(2));
        console.log("NHIF Deduction: KES " + nhif.toFixed(2));
        console.log("NSSF Deduction: KES " + nssf.toFixed(2));
        console.log("NHDF : KES " + nhdf.toFixed(2));
        console.log("Taxable Income: KES " + taxableIncome.toFixed(2));
        console.log("PAYEE Tax: KES " + payee.toFixed(2));
        console.log("Net Salary: KES " + netSalary.toFixed(2));
        break
    }
}
taxCalculator()