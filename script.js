
    // Inicializar AOS
    AOS.init({ duration: 800, once: true });

    // Menú móvil
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('#navMenu a').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });

    // Reserva nav button scroll
    document.getElementById('reserveNavBtn')?.addEventListener('click', () => {
        document.getElementById('reserva-section')?.scrollIntoView({ behavior: 'smooth' });
    });

    // FILTROS GALERÍA
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            galleryItems.forEach(item => {
                if(filterValue === 'all' || item.getAttribute('data-cat') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // FORMULARIO DE RESERVA (simulación)
    const bookingForm = document.getElementById('bookingForm');
    const formMsg = document.getElementById('formMsg');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombreReserva').value.trim();
        const telefono = document.getElementById('telefonoReserva').value.trim();
        if(!nombre || !telefono) {
            formMsg.innerHTML = '⚠️ Por favor completa nombre y teléfono.';
            formMsg.style.color = '#E0C16E';
            return;
        }
        formMsg.innerHTML = '✨ ¡Solicitud enviada! En breve una asesora te contactará vía WhatsApp.';
        formMsg.style.color = '#C6A43F';
        bookingForm.reset();
        setTimeout(() => formMsg.innerHTML = '', 5000);
    });

    // Fijar fecha mínima de hoy en el date picker
    const today = new Date().toISOString().split('T')[0];
    const fechaInput = document.getElementById('fechaReserva');
    if(fechaInput) fechaInput.min = today;
