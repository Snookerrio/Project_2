fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
   .then(users => {
       users.forEach(user => {
           let userBlock = document.createElement("div")
           userBlock.innerHTML = `<p>Id: ${user.id}</p><p>Name: ${user.name}</p> <a href="user-details.html?userId=${user.id}">View Details</a>`
           document.getElementById("userscontainer").appendChild(userBlock);
           userBlock.className = "user";
       });
   });









