function loadApiData() {
    let api = {}
    fetch('../secret/api.json')  // Path to api.json file
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            // Store the apiKey and apiUrl in temporary variables
            const api_key = data.API_KEY;
            const api_url = data.user_url;
            capi = {key: api_key, url: api_url};
        })
        .catch(error => {
            console.error('Error loading the JSON file:', error);
        });
    
}


function search() {
    // Check inputs in order of precedence given as id, email, name
    const id_input = document.getElementById("id-input");
    const email_input = document.getElementById("email-input");
    const name_input = document.getElementById("name-input");
    // Find which value we should search by in order
    if (id_input.value.trim() != "") { // If input has a value
        get_user_info('i', id_input.value);
        id_input.value = "Got the id";
    }
    else if (email_input.value.trim() != "") {
        email_input.value = "Get the email";
    }
    else if (name_input.value.trim() != "") {
        name_input.value = "get the name"
    }

}

// Function to fetch relevant user info from the provided information
    // Flag: char, {i, e, n}
    // Content: string, {user input}
function get_user_info(flag, content) {
    api = loadApiData();
    console.log(api.key, api.url);

    console.log(`Begin user search with specification ${flag}:${content}`);


}