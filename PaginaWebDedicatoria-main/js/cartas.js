
        // --- TEXTOS DE TUS CARTAS (Modifica libremente los títulos y mensajes) ---
        const contenidoCartas = {
            1: {
                titulo: "Nuestro Primer Mes",
                texto: "Amor mío, Jaret:\n\nHoy celebramos nuestro primer mes desde aquel 23 de diciembre, el día en que empezó esta historia tan bonita entre nosotros. Parece increíble pensar que solo ha pasado un mes, porque siento que ya hemos compartido tantos momentos que guardo con mucho cariño en mi corazón.\nDesde que llegaste a mi vida, muchas cosas cambiaron para bien. Me encanta hablar contigo, reírnos juntos y saber que hay alguien tan especial acompañándome en este camino.\n Cada mensaje tuyo, cada detalle y cada momento a tu lado hacen que mi día sea más bonito.\n Quiero que sepas que me haces sentir muy feliz. A tu lado todo parece más sencillo y más lindo, y cada día me doy cuenta de lo importante que eres para mí.\nEste primer mes es solo el comienzo de todo lo que quiero vivir contigo.Gracias por llegar a mi vida y por hacer que esta historia empiece de una forma tan especial. Espero que sigamos sumando muchos meses más juntos, creando recuerdos y aprendiendo uno del otro."
            },
            2: {
                titulo: "Un Segundo Mes Increíble",
                texto: "Amor mio\n\nHoy celebramos dos meses juntos, y no puedo evitar sentirme feliz al pensar en todo lo que hemos vivido desde que comenzó nuestra relación. Desde aquel 23 de diciembre, cada día ha sido una oportunidad para conocernos más, compartir momentos y fortalecer lo que sentimos.\nMe encanta la forma en que logras sacarme una sonrisa incluso en los días más simples. A veces no hace falta hacer algo extraordinario; basta con hablar contigo o sentir tu cariño para que todo se sienta mejor.\nContigo he aprendido que el amor también está en los pequeños detalles: en las conversaciones largas, en las risas, en los momentos tranquilos y en saber que podemos contar el uno con el otro.\nQuiero seguir construyendo esta historia contigo, paso a paso, sin prisas pero con mucho cariño. Gracias por ser tan especial conmigo y por hacer que estos dos meses hayan sido tan significativos."
            },
            3: {
                titulo: "Nuestro Tercer Mes Juntos",
                texto: "Sé que a veces la distancia o la rutina pueden hacer que nos hagamos falta, pero quiero que recuerdes algo: cada pensamiento mío te pertenece.\n\nSi miras esta pantalla, es un pedacito de todo el amor que te tengo guardado. No importa la hora ni el día, siempre estoy contigo de corazón."
            }
        };

        const overlay = document.getElementById('modalOverlay');
        const mTitle = document.getElementById('modalTitle');
        const mBody = document.getElementById('modalBody');
        const closeBtn = document.getElementById('closeModal');

        // Función para inyectar datos en la modal y abrirla
        function abrirCarta(id) {
            const carta = contenidoCartas[id];
            if (carta) {
                mTitle.innerText = carta.titulo;
                mBody.innerText = carta.texto;
                overlay.style.display = 'flex';
            }
        }

        // Cerrar carta
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });

        // Cerrar si hacen clic fuera de la carta de papel abierta
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
