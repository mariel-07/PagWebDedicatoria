// --- CONFIGURACIÓN INICIAL ---
let currentPin = "";
const correctPin = "2312"; // Tu fecha especial

// Selectores del DOM
const dots = document.querySelectorAll(".dot");
const keypadView = document.getElementById("keypadView");
const errorView = document.getElementById("errorView");
const messageBoard = document.getElementById("messageBoard");
const contentRight = document.getElementById("contentRight");
const displayImage = document.getElementById("displayImage");
const mainTitle = document.getElementById("mainTitle");
const subTitle = document.getElementById("subTitle");

// --- FUNCIONES DEL TECLADO ---
function pressKey(num) {
  if (currentPin.length < 4) {
    currentPin += num;
    updateDots();
    if (currentPin.length === 4) {
      setTimeout(checkPin, 300);
    }
  }
}

function deleteKey() {
  if (currentPin.length > 0) {
    currentPin = currentPin.slice(0, -1);
    updateDots();
  }
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index < currentPin.length);
  });
}

// --- LÓGICA DE VALIDACIÓN ---
function checkPin() {
  if (currentPin === correctPin) {
    // Éxito: Ocultar teclado, mostrar buzón
    keypadView.style.display = "none";
    errorView.style.display = "none";
    messageBoard.style.display = "block";
    
    mainTitle.innerText = "¡Bienvenida, mi amor! ❤️";
    subTitle.innerText = "Este es nuestro rincón secreto.";
    displayImage.src = "IMAGEN/gato.gif";
    
    loadMessages();

    if (typeof confetti === 'function') {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.7 } });
    }
  } else {
    // Error: Mostrar vista de error
    keypadView.style.display = "none";
    messageBoard.style.display = "none";
    errorView.style.display = "flex";
    
    displayImage.src = "IMAGEN/cry3.gif";
    mainTitle.innerText = "¡Contraseña incorrecta, bebé! 🥺";
    subTitle.innerText = "Inténtalo de nuevo, por favor.";
  }
}

function resetApp() {
  currentPin = "";
  updateDots();
  
  // Mostrar teclado, ocultar otros
  keypadView.style.display = "block";
  errorView.style.display = "none";
  messageBoard.style.display = "none";
  
  // Restaurar estado visual
  contentRight.style.backgroundColor = "#f9d5e5";
  displayImage.src = "IMAGEN/cat03.gif";
  mainTitle.innerText = "For your eyes only";
  subTitle.innerText = "Enter our month-sary to continue";
}

// --- LÓGICA DEL BUZÓN DE MENSAJES ---
function saveMessage() {
  const input = document.getElementById("msgInput");
  const history = document.getElementById("history");
  
  if (input.value.trim() === "") return;

  const msgs = JSON.parse(localStorage.getItem("secretMsgs") || "[]");
  msgs.push(input.value);
  localStorage.setItem("secretMsgs", JSON.stringify(msgs));

  renderMessage(input.value);
  input.value = "";
}

function renderMessage(text) {
  const history = document.getElementById("history");
  const p = document.createElement("p");
  p.innerText = "💌 " + text;
  p.style.margin = "5px 0";
  p.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
  history.appendChild(p);
  history.scrollTop = history.scrollHeight;
}

function loadMessages() {
  const history = document.getElementById("history");
  history.innerHTML = "";
  const msgs = JSON.parse(localStorage.getItem("secretMsgs") || "[]");
  msgs.forEach(msg => renderMessage(msg));
}
