
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
                texto: "Mi amor \n\nHoy me detuve a pensar en todo lo que hemos recorrido y me sorprende lo mucho que ha pasado en tan poco tiempo. Aunque empezamos aquel 23 de diciembre y tuvimos ese paréntesis en marzo, siento que el tiempo separados solo nos sirvió para darnos cuenta de lo mucho que queríamos estar juntos.Hoy celebramos nuestros 3 meses, y aunque la fecha oficial de aniversario sea el día 09, para mí cada día a tu lado desde que regresamos es un regalo. Agradezco que la vida nos haya dado esta segunda oportunidad, porque estar contigo ahora se siente mucho más sólido, más real y, sobre todo, más especial.Gracias por volver a elegirme, por las risas, por la complicidad y por construir este presente conmigo. Estoy muy feliz de estar aquí, celebrando nuestro camino juntos."
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
