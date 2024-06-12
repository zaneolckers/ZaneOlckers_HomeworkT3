function showAlert(artPiece) {
    alert('You clicked on ' + artPiece);
}

function openModal(title, imageUrl) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalImage').src = imageUrl;
    var modal = new bootstrap.Modal(document.getElementById('artModal'));
    modal.show();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    let backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

function submitForm(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
}
