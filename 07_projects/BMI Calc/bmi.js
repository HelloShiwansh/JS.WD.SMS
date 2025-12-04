const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Valid Height De Bhai!";
        results.style.color = 'black'; 
        return; 
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Valid Weight De Bhai!";
        results.style.color = 'black';
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    results.style.color = 'green';

    if(bmi < 18.6){
        results.innerHTML = `Tera BMI ${bmi} hy!, Tu Kuposhit Hy!!`;
    }
    else if (bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `Tera BMI ${bmi} hy!, Tu Fit Hy!!`;
    }
    else{
        results.innerHTML = `Tera BMI ${bmi} hy!, Tu Motu Hy!!`;
    }
});
