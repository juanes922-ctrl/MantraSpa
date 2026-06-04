<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Mantra Spa · Lujo & Bienestar | Itagüí</title>
    
    <!-- Recursos externos -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- AOS Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    
    
</head>
<body>

<header id="mainHeader">
    <div class="header-inner">
        <a href="#" class="logo">MANTRA <span>SPA</span></a>
        <nav>
            <ul id="navMenu">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#servicios">Experiencias</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#resenas">Comentarios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
        <div class="btn-reserve" id="reserveNavBtn">RESERVAR</div>
        <div class="mobile-menu" id="mobileMenuBtn"><i class="fas fa-bars"></i></div>
    </div>
</header>

<main>
    <!-- HERO unificada -->
    <section id="home" class="hero">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="1000">
            
            <h1>Tu santuario de <br>belleza & relajación</h1>
            <p>Uñas, masajes terapéuticos, tratamientos capilares y experiencias de lujo. Un espacio donde el lujo y la calidez humana se funden para renovar tu energía.</p>
            <div class="hero-buttons">
                <a href="#reserva-section" class="btn-primary">EXPERIENCIA PREMIUM</a>
                <a href="#asesor" class="btn-outline-light">ASESORÍA GRATIS</a>
            </div>
        </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios">
        <div class="container">
            <h2 class="section-title" data-aos="fade-up">Firmado por el bienestar</h2>
            <div class="gold-line"></div>
            <p class="section-sub" data-aos="fade-up">Servicios completos con calidad humana y productos premium. "Como en casa, pero con el lujo de un spa de élite".</p>
            <div class="services-grid">
                <div class="service-card" data-aos="fade-up"><i class="fas fa-hand-sparkles"></i><h3>Uñas & Acrílico</h3><p>Diseños exclusivos, semipermanente, acrílico natural. Duración impecable.</p></div>
                <div class="service-card" data-aos="fade-up" data-aos-delay="100"><i class="fas fa-spa"></i><h3>Masajes Terapéuticos</h3><p>Relajantes, reductores, parejas. Sal con energía renovada.</p></div>
                <div class="service-card" data-aos="fade-up" data-aos-delay="150"><i class="fas fa-face-smile"></i><h3>Micropigmentación</h3><p>Cejas, labios, delineado. Técnicas de vanguardia, resultado natural.</p></div>
                <div class="service-card" data-aos="fade-up" data-aos-delay="200"><i class="fas fa-cut"></i><h3>Cabello & Keratina</h3><p>Aliado, color, tratamientos reparadores. Suavidad y brillo eternos.</p></div>
                <div class="service-card" data-aos="fade-up" data-aos-delay="250"><i class="fas fa-wine-glass"></i><h3>Paquetes de Pareja</h3><p>Cócteles, masajes en duo, y atención personalizada. Regalo inolvidable.</p></div>
                <div class="service-card" data-aos="fade-up" data-aos-delay="300"><i class="fas fa-feather"></i><h3>Día Spa Completo</h3><p>Faciales, corporales, exfoliación y almuerzo gourmet. Todo en un lugar.</p></div>
            </div>
        </div>
    </section>

    <!-- GALERÍA CON FILTROS -->
    <section id="galeria" class="gallery-section">
        <div class="container">
            <h2 class="section-title" data-aos="fade-up">El placer de lo estético</h2>
            <div class="gold-line"></div>
            <div class="gallery-filters" data-aos="fade-up">
                <button class="filter-btn active" data-filter="all">Todo</button>
                <button class="filter-btn" data-filter="nails">Uñas</button>
                <button class="filter-btn" data-filter="massage">Masajes</button>
                <button class="filter-btn" data-filter="face">Micropigmentación</button>
                <button class="filter-btn" data-filter="hair">Cabello</button>
            </div>
            <div class="gallery-grid" id="galleryGrid">
                <div class="gallery-item" data-cat="nails"><img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format" alt="uñas"><div class="gallery-overlay">Manicura Premium</div></div>
                <div class="gallery-item" data-cat="nails"><img src="img/acrilicas-naturales.jpg" alt="acrilico"><div class="gallery-overlay">Acrílico Natural</div></div>
                <div class="gallery-item" data-cat="massage"><img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&auto=format" alt="masaje"><div class="gallery-overlay">Masaje con Piedras</div></div>
                <div class="gallery-item" data-cat="massage"><img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&auto=format" alt="parejas"><div class="gallery-overlay">Experiencia en Pareja</div></div>
                <div class="gallery-item" data-cat="face"><img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format" alt="microblading"><div class="gallery-overlay">Micropigmentación de Cejas</div></div>
                <div class="gallery-item" data-cat="hair"><img src="img/TRATAMIENTO-DE-KERATINA.jpg" alt="keratina"><div class="gallery-overlay">Tratamiento Keratina</div></div>
                <div class="gallery-item" data-cat="face"><img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format" alt="facial"><div class="gallery-overlay">Limpieza Facial Profunda</div></div>
                <div class="gallery-item" data-cat="hair"><img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format" alt="cabello"><div class="gallery-overlay">Tratamiento Capilar</div></div>
            </div>
        </div>
    </section>

    <!-- RESEÑAS -->
    <section id="resenas" class="reviews-section">
        <div class="container">
            <h2 class="section-title" data-aos="fade-up">Lo que dicen nuestras reinas</h2>
            <div class="gold-line"></div>
            <div class="reviews-scroll">
                <div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"100% recomendado. El paquete súper completo, las cumpleañeras quedaron muy satisfechas. Atención inigualable"</p><p class="review-author">— Manuela Diosa</p></div>
                <div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"Un spa acogedor, atención muy linda, limpieza premium y masaje terapéutico excelente. Todo detalle y delicadeza."</p><p class="review-author">— ruth0326</p></div>
                <div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"Mi lugar favorito para consentirme. Más de un año siendo fiel, calidad humana y profesionalismo."</p><p class="review-author">— Angela Diaz</p></div>
                <div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"Me siento como en casa, uñas, cabello, faciales... todo en uno. 20 de 10."</p><p class="review-author">— Yaneth Rua (8 años)</p></div>
                <div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"Excelente servicio, las chicas super profesionales, todo perfecto."</p><p class="review-author">— Catalina Henao</p></div>
            </div>
        </div>
    </section>

    <!-- PAQUETES PREMIUM (DEL SEGUNDO CÓDIGO) -->
    <section class="packages-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="gold-text" style="color:var(--gold); display:block; text-align:center;">⟡ Experiencias diseñadas para ti ⟡</span>
                <h2 class="section-title">Paquetes de lujo</h2>
                <p style="text-align:center; margin-bottom:2rem;">Incluyen coctelería premium y atención personalizada.</p>
            </div>
            <div class="packages-grid">
                <div class="package-card" data-aos="flip-left"><i class="fas fa-crown"></i><h3>Ritual Relajante</h3><p>Masaje + manicure + bebida de bienvenida.</p><a href="#reserva-section" class="btn-outline-light">Reservar</a></div>
                <div class="package-card featured" data-aos="flip-left" data-aos-delay="100"><i class="fas fa-gem"></i><h3>Experiencia Mantra</h3><p>Facial + uñas acrílicas + masaje pies + coctel.</p><a href="#reserva-section" class="btn-primary">Más deseado</a></div>
                <div class="package-card" data-aos="flip-left" data-aos-delay="200"><i class="fas fa-hand-holding-heart"></i><h3>Pareja de Cine</h3><p>Masaje duo + exfoliación + champagne.</p><a href="#reserva-section" class="btn-outline-light">Reservar</a></div>
            </div>
        </div>
    </section>

    <!-- RESERVA + ASESORÍA -->
    <section id="asesor" class="booking-consultant">
        <div class="container">
            <div class="flex-booking">
                <div class="booking-form" id="reserva-section">
                    <h3>Reserva tu momento de lujo</h3>
                    <p style="margin-bottom: 20px; opacity:0.8;">Elige servicio, fecha y relájate. Te confirmamos en minutos.</p>
                    <form id="bookingForm">
                        <div class="form-group"><input type="text" placeholder="Nombre completo *" required id="nombreReserva"></div>
                        <div class="form-group"><input type="tel" placeholder="WhatsApp / Teléfono *" required id="telefonoReserva"></div>
                        <div class="form-group"><select id="servicioSelect"><option value="Día Spa Completo">Día Spa Completo</option><option value="Masaje Terapéutico + Uñas">Masaje + Uñas</option><option value="Paquete Pareja">Paquete Pareja (2 personas)</option><option value="Micropigmentación Cejas">Micropigmentación Cejas</option><option value="Keratina + Corte">Keratina + Corte</option></select></div>
                        <div class="form-group"><input type="date" id="fechaReserva" required></div>
                        <div class="form-group"><input type="time" id="horaReserva" required></div>
                        <button type="submit" class="btn-primary" style="width:100%; background: var(--gold); color:black;">SOLICITAR RESERVA</button>
                        <p id="formMsg" style="font-size:0.8rem; margin-top: 15px;"></p>
                    </form>
                </div>
                <div class="consultant-box">
                    <i class="fas fa-headset" style="font-size: 2rem; color:var(--gold);"></i>
                    <h3>Asesoría en línea 24/7</h3>
                    <p>¿Dudas sobre tratamientos? Nuestras expertas te guían con calidez humana. Resuelve todo al instante.</p>
                    <a href="https://wa.me/573148640050?text=Hola%20Mantra%20Spa,%20quiero%20asesoría%20personalizada%20para%20reservar%20mi%20experiencia%20de%20lujo." target="_blank" class="whatsapp-btn"><i class="fab fa-whatsapp"></i> CHAT CON ASESORA</a>
                    <p style="margin-top: 20px; font-size:0.8rem;">⭐ Respuesta inmediata · Atención personalizada</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACTO Y MAPA -->
    <section id="contacto" class="contact-footer">
        <div class="container">
            <div class="contact-grid">
                <div>
                    <h3 style="color:var(--gold); margin-bottom: 20px;">📍 Encuentra tu santuario</h3>
                    <div class="info-box"><i class="fas fa-map-marker-alt"></i> Cra. 51 #83-135, Santa Maria, Itagüí, Antioquia</div>
                    <div class="info-box"><i class="fas fa-phone-alt"></i> +57 314 8640050</div>
                    <div class="info-box"><i class="fas fa-envelope"></i> bienestar@mantraspa.co</div>
                    <div class="info-box"><i class="fas fa-clock"></i> Lun - Sáb: 10am - 8pm · Dom: 11am - 5pm</div>
                </div>
                <div>
                    <h3 style="color:var(--gold); margin-bottom: 20px;">✨ Experiencia de élite</h3>
                    <p>Más de 8 años transformando el autocuidado. Calidad humana, instalaciones con bioseguridad y productos premium. "Te sientes como en casa".</p>
                    <div class="map-preview" style="margin-top: 20px; border-radius: 20px; overflow:hidden;"><iframe width="100%" height="200" style="border:0; filter: grayscale(0.2);" loading="lazy" allowfullscreen src="https://maps.google.com/maps?q=Cra.%2051%20%2383-135%2C%20Itag%C3%BCi&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe></div>
                </div>
            </div>
            <footer class="footer">
                <div class="footer-container">
                    <!-- Columna: Enlaces Rápidos -->
                    <div class="footer-column">
                        <h2>Enlaces Rápidos</h2>
                        <div class="link-list">
                            <a href="#inicio" target="_blank" >Inicio</a>
                            <a href="#servicios" target="_blank" >Experiencias</a>
                            <a href="#galeria" target="_blank" >Galería</a>
                            <a href="#resen as" target="_blank">Comentarios</a>
                            <a href="https://wa.me/573145853376" target="_blank">Reserva Cita</a>
                        </div>
                    </div>
        
                    <!-- Columna: Redes Sociales -->
                    <div class="footer-column">
                        <h3>Redes Sociales</h3>
                        <p class="slogan">✨ Donde el lujo y <br> la calidez humana se encuentran ✨</p>
                        <div class="social-icons">
                            <a href="#" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                            <a href="https://wa.me/573148640050" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
        
                    <!-- Columna: Políticas -->
                    <div class="footer-column">
                        <h2>Políticas</h2>
                        <nav>
                            <a 
                               target="_blank" 
                               class="policy-link">
                                Política de privacidad y Tratamiento de Datos Personales
                            </a>
                        </nav>
                    </div>
                </div>
        
                <!-- Copyright fuera de las columnas, al final -->
                <div class="copyright">
                    © 2026 Mantra Spa - Todos los derechos reservados.
                </div>
            </footer>
        </div>
    </section>
</main>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<!-- Tu JavaScript separado -->
<script src="script.js" defer></script>


</body>
</html>
