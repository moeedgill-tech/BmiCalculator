function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');
    const categories = document.getElementById("bmi-categories");
    
    // Reset previous highlight
    const rows = document.querySelectorAll("#bmi-categories table tr");
    rows.forEach(row => row.classList.remove("highlight"));
  
    categories.style.display = "block";
  
    if (!height || !weight) {
      result.textContent = "Please enter both height and weight!";
      result.style.color = "red";
      return;
    }
  
    const heightInMeters = height * 0.0254; // 1 inch = 0.0254 meters
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  
    let status = "";
    let highlightIndex = 0;
  
    if (bmi < 18.5) { status = "Underweight"; highlightIndex = 1; }
    else if (bmi < 24.9) { status = "Normal weight"; highlightIndex = 2; }
    else if (bmi < 29.9) { status = "Overweight"; highlightIndex = 3; }
    else if (bmi < 34.9) { status = "Obesity Class I"; highlightIndex = 4; }
    else if (bmi < 39.9) { status = "Obesity Class II"; highlightIndex = 5; }
    else { status = "Obesity Class III"; highlightIndex = 6; }
  
    result.textContent = `Your BMI is ${bmi} (${status})`;
    result.style.color = "#333";
  
    // Highlight matching category row
    if (rows[highlightIndex]) {
      rows[highlightIndex].classList.add("highlight");
    }
  }
  