const bmiForm = document.getElementById("bmiForm");
const result = document.getElementById("result");

bmiForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Validation
    if (isNaN(height) || isNaN(weight)) {
        result.textContent = "Please enter both height and weight.";
        return;
    }

    if (height <= 0 || weight <= 0) {
        result.textContent = "Height and weight must be greater than zero.";
        return;
    }

    // Convert height from centimeters to meters
    const heightInMeters = height / 100;

    // BMI calculation
    const bmi = weight / (heightInMeters * heightInMeters);

    const roundedBMI = bmi.toFixed(2);

    let category;

    // BMI category
    if (bmi < 18.5) {
        category = "Underweight";
    } 
    else if (bmi < 25) {
        category = "Normal weight";
    } 
    else if (bmi < 30) {
        category = "Overweight";
    } 
    else {
        category = "Obesity";
    }

    result.innerHTML = `
        Your BMI: <strong>${roundedBMI}</strong><br>
        Category: <strong>${category}</strong>
    `;

});