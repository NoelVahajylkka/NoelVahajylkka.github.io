document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.getElementById('comments');
    const commentForm = document.getElementById('comment-form');

    // Fetch comments from the server and display them
    function getComments() {
        fetch('/api/comments')
            .then(response => response.json())
            .then(data => {
                commentsContainer.innerHTML = '';
                data.forEach(comment => {
                    const commentElement = document.createElement('div');
                    commentElement.innerText = `${comment.name}: ${comment.comment}`;
                    commentsContainer.appendChild(commentElement);
                });
            });
    }

    // Handle comment submission
    commentForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, comment })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('name').value = '';
            document.getElementById('comment').value = '';
            getComments();
        });
    });

    // Initial comments retrieval
    getComments();
});
