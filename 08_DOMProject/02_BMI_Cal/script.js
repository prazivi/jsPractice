const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid height';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = '';

    if (bmi < 18.6) {
      message = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'Normal Range';
    } else {
      message = 'Overweight';
    }

    // Display the result and message
    results.innerHTML = `<p>Your BMI: ${bmi}</p><p>Category: ${message}</p>`;
  }
});
