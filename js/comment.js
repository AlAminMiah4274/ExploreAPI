function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}
loadComment();

function displayComment(comments) {
    const commentContainer = document.getElementById('comment-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <h4>ID: ${comment.postId}</h4>
            <h5>Name: ${comment.name}</h5>
            <p>Email: ${comment.email}</p>
            <p>Comment: ${comment.body}</p>
        `;
        commentContainer.appendChild(commentDiv);
    }
}