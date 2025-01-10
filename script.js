// Include Luxon for date manipulation
const DateTime = luxon.DateTime;

// Function to calculate age
function calculateAge() {
  const birthdateInput = document.getElementById('birthdate').value;
  const errorElement = document.getElementById('error');
  const resultElement = document.getElementById('result');

  // Clear any previous error messages and results
  errorElement.textContent = '';
  resultElement.textContent = '';

  // Validate input
  if (!birthdateInput) {
    errorElement.textContent = 'Please enter your birthdate.';
    return;
  }

  const birthdate = DateTime.fromISO(birthdateInput, { zone: 'utc' });
  if (!birthdate.isValid || birthdate > DateTime.now()) {
    errorElement.textContent = 'Please enter a valid birthdate.';
    return;
  }

  const now = DateTime.now();
  const diff = now.diff(birthdate, ['years', 'months', 'days']).toObject();

  // Extract years, months, and days
  const ageYears = Math.floor(diff.years);
  const ageMonths = Math.floor(diff.months);
  const ageDays = Math.floor(diff.days);

  // Display result
  resultElement.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}

// Add custom date picker functionality
const input = document.getElementById('birthdate');
input.addEventListener('focus', () => {
  input.type = 'date'; // Show date picker on focus
});
input.addEventListener('blur', () => {
  if (!input.value) {
    input.type = 'text'; // Revert to text input if no date is selected
  }
});
