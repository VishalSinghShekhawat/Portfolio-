document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let formMessage = document.getElementById("form-message");
    
    if (name && email && message) {
        formMessage.style.color = "green";
        formMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
    } else {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill out all fields.";
    }
    
    // Clear the form
    document.getElementById("contact-form").reset();
});
