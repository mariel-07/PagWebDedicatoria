

      const cards = document.querySelectorAll(".card");
      const nextBtn = document.getElementById("next");
      const prevBtn = document.getElementById("prev");
      const playBtn = document.getElementById("play");
      const audio = document.getElementById("main-audio");
      const progressBar = document.getElementById("progress-bar");
      const progressArea = document.getElementById("progress-clickable");
      const overlay = document.getElementById("bg-overlay");
      const titleText = document.getElementById("current-title");
      const artistText = document.getElementById("current-artist");
      const timeCurr = document.getElementById("current-time");
      const timeTotal = document.getElementById("total-duration");

      let currentIndex = 0;
      let isPlaying = false;

      function formatTime(s) {
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec < 10 ? "0" : ""}${sec}`;
      }

      function updateCarousel() {
        cards.forEach((card, index) => {
          card.classList.remove("active", "prev", "next", "hidden");

          if (index === currentIndex) {
            card.classList.add("active");
            overlay.style.background = card.getAttribute("data-bg");
            titleText.innerText = card.getAttribute("data-title");
            artistText.innerText = card.getAttribute("data-artist");

            const songSrc = card.getAttribute("data-src");
            // Solo cambia el src si es una canción distinta
            if (!audio.src.includes(songSrc)) {
              audio.src = songSrc;
              if (isPlaying) audio.play();
            }
          } else if (
            index ===
            (currentIndex - 1 + cards.length) % cards.length
          ) {
            card.classList.add("prev");
          } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add("next");
          } else {
            card.classList.add("hidden");
          }
        });
      }

      // Lógica de Reproducción
      playBtn.addEventListener("click", () => {
        if (isPlaying) {
          audio.pause();
          playBtn.innerHTML = "▶";
        } else {
          audio.play();
          playBtn.innerHTML = "⏸";
        }
        isPlaying = !isPlaying;
      });

      // Actualizar barra de progreso
      audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
          const p = (audio.currentTime / audio.duration) * 100;
          progressBar.style.width = `${p}%`;
          timeCurr.innerText = formatTime(audio.currentTime);
          timeTotal.innerText = formatTime(audio.duration);
        }
      });

      // Click en la barra para saltar tiempo
      progressArea.addEventListener("click", (e) => {
        const width = progressArea.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
      });

      // Botones Siguiente y Anterior
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
      });

      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
      });

      // Click directo en tarjeta
      cards.forEach((card, index) => {
        card.addEventListener("click", () => {
          currentIndex = index;
          updateCarousel();
        });
      });

      // Iniciar el carrusel al cargar
      updateCarousel();
    