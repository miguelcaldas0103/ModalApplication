const openModalButton = document.querySelector('.modal-btn');
const closeModalButton = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay');

// Open the modal when "Open Modal" button is clicked
openModalButton.addEventListener('click', () => {
    modalOverlay.classList.add('active'); // Add the 'active' class to make the modal visible
});

// Close the modal when "Close" button is clicked
closeModalButton.addEventListener('click', () => {
    modalOverlay.classList.remove('active'); // Remove the 'active' class to hide the modal
});