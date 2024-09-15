
const returnsTab = document.getElementById('returns-tab');
const compoundingTab = document.getElementById('compounding-tab');
const returnsCalculator = document.getElementById('returns-calculator');
const compoundingCalculator = document.getElementById('compounding-calculator');
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const calculateReturnsButton = document.getElementById('calculate-returns');
const returnsResultDiv = document.getElementById('returns-result');
const principalCompoundingInput = document.getElementById('principal-compounding');
const rateCompoundingInput = document.getElementById('rate-compounding');
const timeCompoundingInput = document.getElementById('time-compounding');
const frequencySelect = document.getElementById('frequency');
const calculateCompoundingButton = document.getElementById('calculate-compounding');
const compoundingResultDiv = document.getElementById('compounding-result');

// Tab functionality
returnsTab.addEventListener('click', () => {
    returnsCalculator.style.display = 'block';
    compoundingCalculator.style.display = 'none';
    returnsTab.classList.add('active');
    compoundingTab.classList.remove('active');
});

compoundingTab.addEventListener('click', () => {
    returnsCalculator.style.display = 'none';
    compoundingCalculator.style.display = 'block';
    compoundingTab.classList.add('active');
    returnsTab.classList.remove('active');
});

// Returns Calculator
calculateReturnsButton.addEventListener('click', (e) => {
    e.preventDefault();
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value) / 100;
    const time = parseFloat(timeInput.value);

    const interest = principal * rate * time;
    const totalAmount = principal + interest;

    returnsResultDiv.innerHTML = `
        <p>Total Interest: ₹${interest.toFixed(2)}</p>
        <p>Total Amount: ₹${totalAmount.toFixed(2)}</p>
    `;
});

// Compounding Calculator
calculateCompoundingButton.addEventListener('click', (e) => {
    e.preventDefault();
    const principal = parseFloat(principalCompoundingInput.value);
    const rate = parseFloat(rateCompoundingInput.value) / 100;
    const time = parseFloat(timeCompoundingInput.value);
    const frequency = frequencySelect.value;

    let compoundsPerYear;
    switch (frequency) {
        case 'annually':
            compoundsPerYear = 1;
            break;
        case 'quarterly':
            compoundsPerYear = 4;
            break;
        case 'monthly':
            compoundsPerYear = 12;
            break;
        case 'daily':
            compoundsPerYear = 365;
            break;
    }

    const totalCompounds = compoundsPerYear * time;
    const totalAmount = principal * Math.pow((1 + rate / compoundsPerYear), totalCompounds);

    compoundingResultDiv.innerHTML = `
        <p>Total Amount: ₹${totalAmount.toFixed(2)}</p>
        <p>Interest Earned: ₹${(totalAmount - principal).toFixed(2)}</p>
    `;
});
