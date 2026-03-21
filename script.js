// script.js
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function submitForm() {
    document.getElementById("msg").innerText = "Message sent successfully!";
}
