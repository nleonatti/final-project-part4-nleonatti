document.addEventListener('DOMContentLoaded', function() {
    const volunteerButton = document.querySelector('.benefits button');
    const formSection = document.createElement('section');
    formSection.classList.add('volunteer-form');
    formSection.style.display = 'none';

    const formTitle = document.createElement('h1');
    formTitle.textContent = 'Volunteer Information Form';
    formTitle.style.marginBottom = '20px';
    formSection.appendChild(formTitle);

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.style.display = 'block';
    nameLabel.style.marginBottom = '10px';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.style.width = '100%';
    nameLabel.appendChild(nameInput);
    formSection.appendChild(nameLabel);

    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone:';
    phoneLabel.style.display = 'block';
    phoneLabel.style.marginBottom = '10px';
    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'tel');
    phoneInput.style.width = '100%';
    phoneLabel.appendChild(phoneInput);
    formSection.appendChild(phoneLabel);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    emailLabel.style.display = 'block';
    emailLabel.style.marginBottom = '10px';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.style.width = '100%';
    emailLabel.appendChild(emailInput);
    formSection.appendChild(emailLabel);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '20px';
    submitButton.style.padding = '10px 20px';
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.cursor = 'pointer';
    submitButton.addEventListener('click', function() {
        alert('Form submitted!');
        
    });
    formSection.appendChild(submitButton);

    volunteerButton.addEventListener('click', function() {
        
        volunteerButton.parentNode.insertBefore(formSection, volunteerButton.nextSibling);
        formSection.style.display = 'block';
    });

   
    const images = document.querySelectorAll('.gallery-images img');
    const firstImage = images[0];
    const imageWidth = firstImage.width;
    const imageHeight = firstImage.height;

    images.forEach(image => {
        image.width = imageWidth;
        image.height = imageHeight;
    });

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);
});
