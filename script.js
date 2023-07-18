function calculateBMI() {
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // Convert cm to meters

    var bmi = weight / (height * height);

    var category;
    if (bmi < 18.5) {
      category = "Kurus, Gemukin ya masbro"; 
    } else if (bmi < 25) {
      category = "Normal, Mantap";
    } else if (bmi < 30) {
      category = "Gemuk, kurusin mas bro";
    } else {
      category = "Obesitas, waduh ga bahaya ta?";
    }

    var result = "BMI: " + bmi.toFixed(2) + " - " + category;

    document.getElementById("result").innerHTML = result;
  }