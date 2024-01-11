let button = document.querySelector("button");

button.addEventListener("click", function() {
    let text = document.querySelector('.text').value;
    
    // 1. Save the value of the remaining three inputs in three separate variables.
    let number = document.querySelector('.number').value;
    let email = document.querySelector('.email').value;
    let date = document.querySelector('.date').value;
  console.log(number)
  console.log(email)
  console.log(date)
    //  - Use the text variable as a guide.
    //  - You should have a variable for the number, email, and date.
    


    // DO NOT CHANGE THIS CODE
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML += `<p>Text: ${text}</p>`;
    
    
    // 2. Update the results div innerhtml to the remaining three inputs.
    resultsDiv.innerHTML += `<p>Number: ${number}</p>`;
    resultsDiv.innerHTML += `<p>Email: ${email}</p>`;
    resultsDiv.innerHTML += `<p>Date: ${date}</p>`;
  
    //  - Use the line of code above as a guide.
    //  - Take note that string interpolation is used.
    //  - Use the " += " assignment.
    //. - The " += " lets you add to what's already there - similar to appending.
    


});;