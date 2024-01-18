function calculateBMI(){
    var heightInput = document.getElementById('height');
    var weightInput = document.getElementById('weight');
    var resultDiv = document.getElementById('result');
    

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if(isNaN(height)|| isNaN(weight))
    {
        resultDiv.innerHTML ="Please Enter Valid Height And Weight";
        return;
    }
    var bmi =weight/((height/100)**2);
    var category = "";
    if(bmi<18.5)
    {
        category="underWeight";

    }else if(bmi<25)
    {
        category="Normal Weight";
    }else if(bmi<30)
    {
        category="Overweight";
    }else{
        category="Obese";
    }
    resultDiv.innerHTML = "Your BMI Is "+bmi.toFixed(2)+"(" + category + ")";
}