// JavaScript: Registration Form Validation

document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student information
    let name = document.getElementById("studentName").value.trim();

    let email = document.getElementById("studentEmail").value.trim();

    let selectedEvent = document.getElementById("event").value;

    let message = document.getElementById("message");

    // Check empty fields
    if (name === "" || email === "") {

        message.innerHTML = "Please fill in your name and email.";

        message.style.color = "red";

    }

    // Check email format
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        message.innerHTML = "Please enter a valid email address.";

        message.style.color = "red";

    }

    else {

        message.innerHTML =
        "Congratulations " + name +
        "! You successfully registered for " +
        selectedEvent + ".";

        message.style.color = "green";

    }

});


// JavaScript: Change Card Colour

document.getElementById("changeColor")
.addEventListener("click", function() {

    document.getElementById("myCard")
    .style.backgroundColor = "lightyellow";

});


// jQuery: Show and Hide Instructions

$("#showInstructions").click(function() {

    $("#instructions").toggle();

});


// jQuery: Slide Toggle Effect

$("#effectButton").click(function() {

    $("#eventDetails").slideToggle();

});


// jQuery: Add New Event

$("#addEvent").click(function() {

    $("#eventList").append("<li>New University Event</li>");

});


// jQuery: Mouseover Event

$("#heading").mouseover(function() {

    $(this).css("color", "red");

});


// jQuery: Mouseout Event

$("#heading").mouseout(function() {

    $(this).css("color", "#0d6efd");

});


// Display Complete Source Code on Website

fetch("index.html")
.then(response => response.text())
.then(data => {

    document.getElementById("htmlSource").textContent = data;

})
.catch(() => {

    document.getElementById("htmlSource").textContent =
    "Open the website using a local server to display source code.";

});


fetch("style.css")
.then(response => response.text())
.then(data => {

    document.getElementById("cssSource").textContent = data;

});


fetch("script.js")
.then(response => response.text())
.then(data => {

    // Remove the source-display section from displayed JS
    // to avoid repeatedly displaying this part.
    let sourceStart = data.indexOf("// Display Complete Source Code");

    if (sourceStart !== -1) {
        data = data.substring(0, sourceStart);
    }

    document.getElementById("jsSource").textContent = data;

});