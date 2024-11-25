document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const commentsContainer = document.getElementById('commentsContainer');

    // Retrieve saved comments from localStorage
    let savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    // Function to render comments
    function renderComments() {
        commentsContainer.innerHTML = '';
        savedComments.forEach((comment, index) => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <h4>${comment.name}</h4>
                <p>${comment.text}</p>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            commentsContainer.appendChild(commentDiv);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deleteComment(index);
            });
        });
    }

    // Delete a comment
    function deleteComment(index) {
        savedComments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(savedComments));
        renderComments();
    }

    // Display existing comments on page load
    renderComments();

    // Handle form submission
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const comments = document.getElementById('comments').value;

        // Create a new comment object
        const newComment = {
            name: name,
            text: comments
        };

        // Add the new comment to the saved comments array
        savedComments.push(newComment);

        // Save the updated comments array to localStorage
        localStorage.setItem('comments', JSON.stringify(savedComments));

        // Re-render comments
        renderComments();

        // Clear form
        feedbackForm.reset();
    });
});

