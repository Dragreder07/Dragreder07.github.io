document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cảm ơn bạn đã liên hệ với chúng tôi!');
    this.reset();
});
