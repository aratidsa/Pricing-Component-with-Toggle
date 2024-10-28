
const priceToggle = document.getElementById("priceToggle")

document.getElementById("priceToggle").addEventListener("change", function() {
    // Toggle the 'show-monthly' class on the body element
    document.body.classList.toggle("show-monthly", this.checked)
})


 // Add an event listener for keydown events on the document
 document.addEventListener("keydown", function(event) {
    // Check if the Enter or Space key is pressed
    if (event.key === "Enter" || event.key === " ") {
        // Prevent default behavior for the Enter key
        event.preventDefault()
        // Toggle the checkbox, which will also move the slider
        priceToggle.checked = !priceToggle.checked
        // Toggle the 'show-monthly' class on the body
        document.body.classList.toggle("show-monthly")
    }
})