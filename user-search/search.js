function search() {
    // Check inputs in order of precedence given as id, email, name
    const id_input = document.getElementById("id-input");
    const email_input = document.getElementById("email-input");
    const name_input = document.getElementById("name-input");
    // Find which value we should search by in order
    if (id_input.value.trim() != "") { // If input has a value
        id_input.value = "Got the id";
    }
    else if (email_input.value.trim() != "") {
        email_input.value = "Get the email";
    }
    else if (name_input.value.trim() != "") {
        name_input.value = "get the name"
    }

}