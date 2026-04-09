function classifyConsumption() {
    const input = document.getElementById('kwhInput');
    const error = document.getElementById('Error');
    const value = parseFloat(input.value);


    error.style.display = 'none';

    if (isNaN(value) || value < 0) {
        error.innerText = "Please input a non-negative number.";
        error.style.display = 'block';
        return;
    }

    let category = "";
    let description = "";

    if (value >= 0 && value <= 100) {
        category = "Lifeline Consumer";
        description = "Discounted electricity rates";
    } 
    else if (value >= 101 && value <= 200) {
        category = "Low Consumption";
        description = "Normal residential rate";
    } 
    else if (value >= 201 && value <= 300) {
        category = "Average Consumption";
        description = "Typical electricity usage";
    } 
    else if (value >= 301 && value <= 500) {
        category = "High Consumption";
        description = "Higher electricity usage";
    } 
    else {
        category = "Very High Consumption";
        description = "Heavy electricity users";
    }

    alert(`${category} : ${description}`);
}