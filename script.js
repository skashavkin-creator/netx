// Get modal and buttons
const modal = document.getElementById('walletModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Get the element with the class 'open-modal-area'
const openModalArea = document.querySelector(".open-modal-area");

// Function to open the modal
if (openModalArea) {
  openModalArea.onclick = function () {
    modal.style.display = "block";
  };
}

// Open the wallet selection modal
if (openModalBtn) {
  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });
}

// Close the wallet selection modal
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });
}

// Open Modal
const openForm = document.getElementById('openForm');
if (openForm) {
  openForm.onclick = function () {
    document.getElementById('popupModal').style.display = 'block';
  };
}

// Close Modal
const closeForm = document.getElementById('closeForm');
if (closeForm) {
  closeForm.onclick = function () {
    document.getElementById('popupModal').style.display = 'none';
  };
}

// Open Tab
function openTab(event, tabName) {
  var tabContent = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('active');
  }

  var tabButtons = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Close Modal when clicked outside
window.onclick = function (event) {
  var popupModal = document.getElementById('popupModal');
  if (event.target === popupModal) {
    popupModal.style.display = 'none';
  }

  var errorModal = document.getElementById("errorModal");
  if (event.target === errorModal) {
    errorModal.style.display = "none";
  }
}

// Function to show the error popup modal
function showErrorPopup() {
  var modal = document.getElementById("errorModal");
  if (modal) modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("errorModal");
  if (modal) modal.style.display = "none";
}

/*
// REMOVE the JS form submission handler for Formspree
// The HTML form now submits directly to Formsubmit, so this block should be removed or commented out:

const importWalletForm = document.getElementById('importWalletForm');
if (importWalletForm) {
  importWalletForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents page reload

    // Formspree fetch logic removed
  });
}
*/
