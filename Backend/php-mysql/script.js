document.addEventListener("DOMContentLoaded", function() {
    fetchUsers();

    document.getElementById("addUser").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        fetch('server.php/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetchUsers();
        })
        .catch(error => console.error('Error:', error));
    });

    document.getElementById("delete").addEventListener("click", function() {
        deleteAllUsers();
    });
});

function fetchUsers() {
    fetch('server.php/users')
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById("users");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `Name: ${user.name}, Email: ${user.email}`;
            userList.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));
}

function deleteAllUsers() {
    fetch('server.php/users', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        fetchUsers();
    })
    .catch(error => console.error('Error:', error));
}
