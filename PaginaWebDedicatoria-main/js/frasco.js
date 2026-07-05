
        // --- BANCO DE RECUERDOS (Personaliza estos textos libremente) ---
        const recuerdos = [
            "¿Te acuerdas de nuestra primera cita? Estaba tan nervioso/a que casi olvido cómo hablar.",
            "Amo cuando nos reímos juntos de cosas que absolutamente nadie más entiende.",
            "Esa tarde en la que nos quedamos escuchando música sin decir nada... fue perfecta.",
            "El día que me di cuenta de que eras una persona completamente única y especial para mí.",
            "Me encanta ver cómo construimos recuerdos mes a mes. ¡Cada día cuenta!",
            "¡Eres la casualidad más bonita y alegre que me ha pasado! ❤",
            "Recuerdo perfectamente la primera vez que sonreíste por un mensaje mío."
        ];

        // Referencias de los elementos en pantalla
        const jar = document.getElementById('memoryJar');
        const popup = document.getElementById('memoryPopup');
        const popupText = document.getElementById('popupText');
        const closeBtn = document.getElementById('closePopup');

        // Lógica de interacción
        jar.addEventListener('click', () => {
            // Evita abrir otro mensaje si ya hay uno visible
            if (popup.style.display === 'block') return;

            // Inicia la animación de agitar
            jar.classList.add('shake');

            // Espera a que termine la vibración (500ms) para lanzar la nota
            setTimeout(() => {
                // Elige un mensaje de la lista de manera aleatoria
                const indice = Math.floor(Math.random() * recuerdos.length);
                popupText.innerText = recuerdos[indice];
                
                // Muestra la nota flotante
                popup.style.display = 'block';

                // Remueve la clase para que se pueda volver a agitar en el futuro
                jar.classList.remove('shake');
            }, 500);
        });

        // Evento para cerrar la nota al presionar la 'X'
        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Cierra la nota automáticamente si hacen clic en cualquier lugar fuera de ella
        window.addEventListener('click', (e) => {
            if (e.target !== jar && !jar.contains(e.target) && e.target !== popup && !popup.contains(e.target)) {
                popup.style.display = 'none';
            }
        });
   
