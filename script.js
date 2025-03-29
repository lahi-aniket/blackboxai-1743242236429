document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init('AlGsg2Ng8xsZWSzVj'); // Replace with actual public key

    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const documentFile = document.getElementById('document').files[0];

        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        if (documentFile) {
            formData.append('document', documentFile);
        }

        // Send email using EmailJS
        emailjs.send('service_pkqk0lc', 'service_pkqk0lc', {
            from_name: name,
            from_email: email,
            message: message,
            document: documentFile ? documentFile.name : 'No document attached'
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            contactForm.reset();
            contactForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
    });
});