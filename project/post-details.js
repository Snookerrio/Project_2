const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postDetailsContainer = document.getElementById("postdetailscontainer");
        postDetailsContainer.innerHTML = `
                <p>ID: ${post.id}</p>
                <p>Title: ${post.title}</p>
                <p>Body: ${post.body}</p>
            `;
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const postCommentsContainer = document.getElementById("postcommentscontainer");
        comments.forEach(comment => {
            const commentBlock = document.createElement("div");
            commentBlock.className = "comment";
            commentBlock.innerHTML = `
                    <p>Id: ${comment.id}</p>
                    <p>Name: ${comment.name}</p>
                    <p>Email: ${comment.email}</p>
                    <p>Body: ${comment.body}</p>
                `;
            postCommentsContainer.appendChild(commentBlock);
        });
    });