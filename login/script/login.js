document.addEventListener('DOMContentLoaded', () => {
const loginButton = document.getElementById('loginButton')

loginButton.addEventListener('click', function() {
    login();
});
})


function login(){
    // Fetching database
    fetch('users.json')
    .then(response => response.json())
    .then(data => {

        const username = document.getElementById('username');
        const password = document.getElementById('password');
        
        const user = data.users.find(user => user.username === username.value && user.password === password.value);
        
        if (user) {
            window.history.pushState({}, null, `/dashboard?user=${user.username}`);
        } else {    
            username.value = "";
            password.value = "";
            document.getElementById("errorMessage").style.display = "block";
            username.classList.add("invalid");
            password.classList.add("invalid");  
        }

    })
    .catch(error => console.error(error));
    } 
