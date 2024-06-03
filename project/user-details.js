const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const userId = urlParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(users => {
        const userDetailsContainer = document.getElementById("userdetailscontainer");

        userDetailsContainer.innerHTML = `
                            <p>ID: ${users.id}</p>
                            <p>Name: ${users.name}</p>
                            <p>Username: ${users.username}</p>
                            <p>Email: ${users.email}</p>
                            <p>Address: ${users.address.street}, ${users.address.suite}, ${users.address.city}, ${users.address.zipcode}, ${users.address.geo.lat}, ${users.address.geo.lng}</p>
                            <p>Phone: ${users.phone}</p>
                            <p>Website: ${users.website}</p>
                            <p>Company: ${users.company.name},${users.company.catchPhrase}${users.company.bs}</p>   
            `;
            userDetailsContainer.appendChild(userDetailsContainer)

    });


document.getElementById("userpostsbutton").addEventListener("click", function() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const userPostsContainer = document.getElementById("userpostscontainer");
            posts.forEach(post => {
                const postBlock = document.createElement("div");
                postBlock.className = "post";
                postBlock.innerHTML = `
                        <p>Title: ${post.title}</p>
                    <a href="post-details.html?postId=${post.id}">View Post</a>
                    `;
                userPostsContainer.appendChild(postBlock);
            });
        });
});

