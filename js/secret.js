
      let currentPin = "";
      const correctPin = "2312"; // Tu fecha especial
      const dots = document.querySelectorAll(".dot");
      const keypadView = document.getElementById("keypadView");
      const errorView = document.getElementById("errorView");
      const contentRight = document.getElementById("contentRight");
      const displayImage = document.getElementById("displayImage");
      const mainTitle = document.getElementById("mainTitle");
      const subTitle = document.getElementById("subTitle");

      function pressKey(num) {
        if (currentPin.length < 4) {
          currentPin += num;
          updateDots();

          if (currentPin.length === 4) {
            setTimeout(checkPin, 300);
          }
        }
      }

      function updateDots() {
        dots.forEach((dot, index) => {
          if (index < currentPin.length) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });
      }

      function checkPin() {
        if (currentPin === correctPin) {
          alert("¡Código correcto! ❤️");
          // Aquí puedes redirigir a otra página si quieres
        } else {
          // Cambios visuales al fallar
          keypadView.style.display = "none";
          errorView.style.display = "flex";
          contentRight.style.backgroundColor = "#ffffff";

          displayImage.src = "cry.gif";
          mainTitle.innerText = "Contraseña incorrecta, ¿estás seguro de que eres mi bebé??";
          subTitle.innerText = "";
        }
      }

      function resetApp() {
        currentPin = "";
        updateDots();
        keypadView.style.display = "flex";
        errorView.style.display = "none";
        contentRight.style.backgroundColor = "#f9d5e5";

        displayImage.src =
          "https://media.tenor.com/79S-xW_6-8AAAAAi/cute-cat.gif";
        mainTitle.innerText = "For your eyes only";
        subTitle.innerText = "Enter our month-sary to continue";
      }
   