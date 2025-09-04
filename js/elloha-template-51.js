$(document).ready(function () {
    // ****** Variables globales pour les sélecteurs
    const $navbarToggler = $('.navbar-toggler');
    const $subMenus = $('.clic-sub-menu');
    const $description = $('.description');
    const $weatherTrad = $('.weather-trad');
    const $weatherImg = $('.weather-icon');

    // ****** Menu actif/inactif
    function initMenu() {
        $navbarToggler.on('click', function () {
            $('.navbar-toggler .btn-menu').toggleClass('d-none');
            $('.mobile-nav').toggleClass('mobile-nav-active');
        });
    }

    // ****** Sous-menu
    function initSubMenu() {
        $subMenus.on('click', function () {
            let $this = $(this);
            let $subMenu = $this.children('.sub-menu');
            let $link = $this.children('a');

            if ($subMenu.hasClass('sub-menu-active')) {
                $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
                $('.clic-sub-menu a').removeClass('a-active');
            } else {
                $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
                $('.clic-sub-menu a').removeClass('a-active');

                $subMenu.addClass('sub-menu-active');
                $link.addClass('a-active');
            }
        });
    }

    // ****** Texte présentation page Home
    function initDescriptionToggle() {
        if ($description.length) {
            const $seeMore2 = $('#seeMore2');
            const $seeLess2 = $('#seeLess2');

            // Vérifie hauteur description
            if ($description[0].scrollHeight <= $description.height()) {
                $seeMore2.hide();
                $seeLess2.hide();
            } else {
                $seeMore2.show();
                $seeLess2.hide();
            }

            // Voir plus
            $seeMore2.on('click', function (e) {
                e.preventDefault();
                $description.css('height', 'auto').addClass('expanded');
                $seeMore2.hide();
                $seeLess2.show();
            });

            // Voir moins
            $seeLess2.on('click', function (e) {
                e.preventDefault();
                $description.css('height', '').removeClass('expanded');
                $seeMore2.show();
                $seeLess2.hide();
            });
        }
    }

    // ****** Traduction météo
    function initWeatherTranslation() {
        const weatherTranslations = {
            'clear-day': 'Clair',
            'Cloudy': 'Nuageux',
            'fog': 'Brouillard',
            'partly-cloudy-day': 'Mi-couvert',
            'rain': 'Pluie',
            'sleet': 'Verglas',
            'snow': 'Neige',
            'wind': 'Vent',
        };

        $weatherTrad.each(function () {
            const $this = $(this);
            const weatherTrad = $this.attr('data') || 'Undefined';
            const translation = weatherTranslations[weatherTrad] || 'Non defini';
            $this.text(translation);
        });
    }

    // ****** Slider Météo
    $('.slider-meteo').owlCarousel({
        loop: false,
        rewind: false,
        autoplay: false,
        items: 1,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M0.879999 9.91002L4.75 6.00002C4.84296 5.90629 4.95357 5.8319 5.07542 5.78113C5.19728 5.73036 5.32799 5.70422 5.46 5.70422C5.59201 5.70422 5.72272 5.73036 5.84458 5.78113C5.96643 5.8319 6.07704 5.90629 6.17 6.00002C6.35625 6.18738 6.46079 6.44084 6.46079 6.70502C6.46079 6.96921 6.35625 7.22266 6.17 7.41002L2.61 11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4805 24 11.7348 24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8947 23.2652 13 23 13H2.55L6.17 16.61C6.26373 16.703 6.33812 16.8136 6.38889 16.9354C6.43966 17.0573 6.4658 17.188 6.4658 17.32C6.4658 17.452 6.43966 17.5827 6.38889 17.7046C6.33812 17.8265 6.26373 17.9371 6.17 18.03C6.07704 18.1238 5.96643 18.1981 5.84458 18.2489C5.72272 18.2997 5.59201 18.3258 5.46 18.3258C5.32799 18.3258 5.19728 18.2997 5.07542 18.2489C4.95357 18.1981 4.84296 18.1238 4.75 18.03L0.879999 14.15C0.318197 13.5875 0.00263977 12.825 0.00263977 12.03C0.00263977 11.235 0.318197 10.4725 0.879999 9.91002Z' fill='var(--color-bg-2)' /></svg > ",
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M23.12 9.91002L19.25 6.00002C19.157 5.90629 19.0464 5.8319 18.9246 5.78113C18.8027 5.73036 18.672 5.70422 18.54 5.70422C18.408 5.70422 18.2773 5.73036 18.1554 5.78113C18.0336 5.8319 17.923 5.90629 17.83 6.00002C17.6437 6.18738 17.5392 6.44084 17.5392 6.70502C17.5392 6.96921 17.6437 7.22266 17.83 7.41002L21.39 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4805 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8947 0.734784 13 1 13H21.45L17.83 16.61C17.7363 16.703 17.6619 16.8136 17.6111 16.9354C17.5603 17.0573 17.5342 17.188 17.5342 17.32C17.5342 17.452 17.5603 17.5827 17.6111 17.7046C17.6619 17.8265 17.7363 17.9371 17.83 18.03C17.923 18.1238 18.0336 18.1981 18.1554 18.2489C18.2773 18.2997 18.408 18.3258 18.54 18.3258C18.672 18.3258 18.8027 18.2997 18.9246 18.2489C19.0464 18.1981 19.157 18.1238 19.25 18.03L23.12 14.15C23.6818 13.5875 23.9974 12.825 23.9974 12.03C23.9974 11.235 23.6818 10.4725 23.12 9.91002Z' fill='var(--color-bg-2)' /></svg > "
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Gestion des images météo
    function initWeatherImg() {
        $weatherImg.each(function () {
            const $this = $(this);

            // Récupérez l'attribut `data` (ou utilisez une valeur par défaut)
            const weatherIcon = $this.attr('data') || 'clear-day';

            // Trouvez l'élément `.meteo-img` associé
            const $meteoImg = $this.closest('.weather-item').find('.meteo-img');

            // Construisez l'URL de l'icône météo
            const baseUrl = $meteoImg.data('url');
            const iconPath = `${baseUrl}${weatherIcon}.jpeg`;

            // Appliquez la classe et le style de fond dynamique
            $meteoImg
                .addClass(`weather-${weatherIcon}`)
                .css({
                    'background-image': `url(${iconPath})`,
                    'background-size': 'cover',
                });
        });
    }

    // ****** Scea dépliés
    function initSceaToggle() {
        var items = $('.picto-informations .options-scea');
        var container = $('.picto-informations');
        var maxVisibleItems = 12;

        // Fonction pour gérer l'affichage initial
        function updateItemsVisibility() {
            items.hide();
            items.slice(0, maxVisibleItems).show();
            updateButtonVisibility();
        }

        // Fonction pour afficher ou masquer le bouton "Voir plus"
        function updateButtonVisibility() {
            if (items.length > maxVisibleItems) {
                $('.btn-contain.btn-contain-scea').show();
            } else {
                $('.btn-contain.btn-contain-scea').hide();
            }
        }

        // Ajouter l'événement clic pour le bouton "Voir plus"
        $("#seeMore1").on('click', function (e) {
            e.preventDefault();
            items.show();
            container.addClass('expanded');
            $("#seeMore1").addClass('d-none');
            $("#seeLess1").removeClass('d-none');
        });

        // Ajouter l'événement clic pour le bouton "Voir moins"
        $("#seeLess1").on('click', function (e) {
            e.preventDefault();
            updateItemsVisibility();
            container.removeClass('expanded');
            $("#seeLess1").addClass('d-none');
            $("#seeMore1").removeClass('d-none');
        });

        // Initialiser l'affichage
        updateItemsVisibility();
    };

    // ****** Slider Galerie
    function sliderGallery() {
        const CaroS = document.querySelector('.Carousel-slider');
        const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
        const hammer = new Hammer(CaroS);
        const CaroSTimer = 7000;

        let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

        // Flèches
        document.getElementById('prev-slide').addEventListener('click', () => {
            clearInterval(CaroAutoplay);
            CaroSlider.prev();
        });

        document.getElementById('next-slide').addEventListener('click', () => {
            clearInterval(CaroAutoplay);
            CaroSlider.next();
        });

        // Cacher indicateurs si trop
        setTimeout(() => {
            const indicators = document.querySelectorAll('.indicators li');
            if (indicators.length > 5) {
                for (let i = 5; i < indicators.length; i++) {
                    indicators[i].style.display = 'none';
                }
            }
        }, 500);

        // Gestes tactiles
        hammer.on('swipe', () => {
            clearInterval(CaroAutoplay);
            CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        });

        // Pause au survol
        CaroS.onmouseenter = () => clearInterval(CaroAutoplay);
        CaroS.onmouseleave = () => {
            clearInterval(CaroAutoplay);
            CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        };

        // Redirection clic image (optionnel)
        document.querySelectorAll('.slider-item').forEach((el) => {
            el.addEventListener('click', () => {
                const href = el.dataset.href;
                if (href && href !== '#') window.open(href, '_blank');
            });
        });
    };

    // ****** Slider Offres/Prestas
    $('.slider-prestas').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M0.879999 9.91002L4.75 6.00002C4.84296 5.90629 4.95357 5.8319 5.07542 5.78113C5.19728 5.73036 5.32799 5.70422 5.46 5.70422C5.59201 5.70422 5.72272 5.73036 5.84458 5.78113C5.96643 5.8319 6.07704 5.90629 6.17 6.00002C6.35625 6.18738 6.46079 6.44084 6.46079 6.70502C6.46079 6.96921 6.35625 7.22266 6.17 7.41002L2.61 11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4805 24 11.7348 24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8947 23.2652 13 23 13H2.55L6.17 16.61C6.26373 16.703 6.33812 16.8136 6.38889 16.9354C6.43966 17.0573 6.4658 17.188 6.4658 17.32C6.4658 17.452 6.43966 17.5827 6.38889 17.7046C6.33812 17.8265 6.26373 17.9371 6.17 18.03C6.07704 18.1238 5.96643 18.1981 5.84458 18.2489C5.72272 18.2997 5.59201 18.3258 5.46 18.3258C5.32799 18.3258 5.19728 18.2997 5.07542 18.2489C4.95357 18.1981 4.84296 18.1238 4.75 18.03L0.879999 14.15C0.318197 13.5875 0.00263977 12.825 0.00263977 12.03C0.00263977 11.235 0.318197 10.4725 0.879999 9.91002Z' fill='var(--color-bg-2)' /></svg > ",
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M23.12 9.91002L19.25 6.00002C19.157 5.90629 19.0464 5.8319 18.9246 5.78113C18.8027 5.73036 18.672 5.70422 18.54 5.70422C18.408 5.70422 18.2773 5.73036 18.1554 5.78113C18.0336 5.8319 17.923 5.90629 17.83 6.00002C17.6437 6.18738 17.5392 6.44084 17.5392 6.70502C17.5392 6.96921 17.6437 7.22266 17.83 7.41002L21.39 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4805 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8947 0.734784 13 1 13H21.45L17.83 16.61C17.7363 16.703 17.6619 16.8136 17.6111 16.9354C17.5603 17.0573 17.5342 17.188 17.5342 17.32C17.5342 17.452 17.5603 17.5827 17.6111 17.7046C17.6619 17.8265 17.7363 17.9371 17.83 18.03C17.923 18.1238 18.0336 18.1981 18.1554 18.2489C18.2773 18.2997 18.408 18.3258 18.54 18.3258C18.672 18.3258 18.8027 18.2997 18.9246 18.2489C19.0464 18.1981 19.157 18.1238 19.25 18.03L23.12 14.15C23.6818 13.5875 23.9974 12.825 23.9974 12.03C23.9974 11.235 23.6818 10.4725 23.12 9.91002Z' fill='var(--color-bg-2)' /></svg > "
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                items: 3,
                margin: 32,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 3,
                margin: 32,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Voir plus / Voir moins pour les Offres Spéciales
    function seeMoreSeeLessDescripSpecialOffer() {

        // Vérifie si le bouton "Voir plus" doit être affiché
        function toggleSeeMoreVisibility() {
            $(".special-offer-big-contain .valid-for-and-descrip").each(function () {
                var $container = $(this);
                var $descriptionSpecialOffer = $container.find(".description-special-offer");
                var $seeMore = $container.find(".seeMore1");

                if ($descriptionSpecialOffer.length &&
                    $descriptionSpecialOffer[0].scrollHeight > $descriptionSpecialOffer[0].clientHeight) {
                    $seeMore.show();
                } else {
                    $seeMore.hide();
                }
            });
        }

        // On exécute dès le chargement du DOM
        toggleSeeMoreVisibility();

        // On relance si la fenêtre est redimensionnée (utile responsive)
        $(window).on("resize", toggleSeeMoreVisibility);

        // Gestion Voir plus avec délégation
        $(document).on("click", ".seeMore1", function (e) {
            e.preventDefault();
            console.log("Clic Voir plus détecté");

            var $container = $(this).closest(".valid-for-and-descrip");
            var $descriptionSpecialOffer = $container.find(".description-special-offer");

            $descriptionSpecialOffer.addClass("expanded");
            $container.find(".seeMore1").hide();
            $container.find(".seeLess1").show();
        });

        // Gestion Voir moins avec délégation
        $(document).on("click", ".seeLess1", function (e) {
            e.preventDefault();
            console.log("Clic Voir moins détecté");

            var $container = $(this).closest(".valid-for-and-descrip");
            var $descriptionSpecialOffer = $container.find(".description-special-offer");

            $descriptionSpecialOffer.removeClass("expanded");
            $container.find(".seeMore1").show();
            $container.find(".seeLess1").hide();
        });
    }

    // ****** Slider news
    $('.slider-news').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoWidth: true,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M0.879999 9.91002L4.75 6.00002C4.84296 5.90629 4.95357 5.8319 5.07542 5.78113C5.19728 5.73036 5.32799 5.70422 5.46 5.70422C5.59201 5.70422 5.72272 5.73036 5.84458 5.78113C5.96643 5.8319 6.07704 5.90629 6.17 6.00002C6.35625 6.18738 6.46079 6.44084 6.46079 6.70502C6.46079 6.96921 6.35625 7.22266 6.17 7.41002L2.61 11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4805 24 11.7348 24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8947 23.2652 13 23 13H2.55L6.17 16.61C6.26373 16.703 6.33812 16.8136 6.38889 16.9354C6.43966 17.0573 6.4658 17.188 6.4658 17.32C6.4658 17.452 6.43966 17.5827 6.38889 17.7046C6.33812 17.8265 6.26373 17.9371 6.17 18.03C6.07704 18.1238 5.96643 18.1981 5.84458 18.2489C5.72272 18.2997 5.59201 18.3258 5.46 18.3258C5.32799 18.3258 5.19728 18.2997 5.07542 18.2489C4.95357 18.1981 4.84296 18.1238 4.75 18.03L0.879999 14.15C0.318197 13.5875 0.00263977 12.825 0.00263977 12.03C0.00263977 11.235 0.318197 10.4725 0.879999 9.91002Z' fill='var(--color-bg-2)' /></svg > ",
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M23.12 9.91002L19.25 6.00002C19.157 5.90629 19.0464 5.8319 18.9246 5.78113C18.8027 5.73036 18.672 5.70422 18.54 5.70422C18.408 5.70422 18.2773 5.73036 18.1554 5.78113C18.0336 5.8319 17.923 5.90629 17.83 6.00002C17.6437 6.18738 17.5392 6.44084 17.5392 6.70502C17.5392 6.96921 17.6437 7.22266 17.83 7.41002L21.39 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4805 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8947 0.734784 13 1 13H21.45L17.83 16.61C17.7363 16.703 17.6619 16.8136 17.6111 16.9354C17.5603 17.0573 17.5342 17.188 17.5342 17.32C17.5342 17.452 17.5603 17.5827 17.6111 17.7046C17.6619 17.8265 17.7363 17.9371 17.83 18.03C17.923 18.1238 18.0336 18.1981 18.1554 18.2489C18.2773 18.2997 18.408 18.3258 18.54 18.3258C18.672 18.3258 18.8027 18.2997 18.9246 18.2489C19.0464 18.1981 19.157 18.1238 19.25 18.03L23.12 14.15C23.6818 13.5875 23.9974 12.825 23.9974 12.03C23.9974 11.235 23.6818 10.4725 23.12 9.91002Z' fill='var(--color-bg-2)' /></svg > "
        ],
        responsiveClass: true,
        dots: false,
        margin: 16,
        responsive: {
            0: {
                nav: true,
                autoWidth: true,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                nav: false,
                autoWidth: false,
                items: 3,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                nav: false,
                autoWidth: false,
                items: 3,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                nav: false,
                autoWidth: false,
                items: 4,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Suivre les cards des news au survol
    function followCards() {
        document.querySelectorAll('.news-contain').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const moveX = ((x - centerX) / centerX) * 30;
                const moveY = ((y - centerY) / centerY) * 30;

                card.style.transform = `scale(1.06) translate(${moveX}px, ${moveY}px)`;
            });

            card.addEventListener('mouseenter', () => {
                card.classList.add('hovered');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('hovered');
                card.style.transform = 'scale(1)';
            });
        });
    };

    // ****** Slider avis
    $('.avis-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M0.879999 9.91002L4.75 6.00002C4.84296 5.90629 4.95357 5.8319 5.07542 5.78113C5.19728 5.73036 5.32799 5.70422 5.46 5.70422C5.59201 5.70422 5.72272 5.73036 5.84458 5.78113C5.96643 5.8319 6.07704 5.90629 6.17 6.00002C6.35625 6.18738 6.46079 6.44084 6.46079 6.70502C6.46079 6.96921 6.35625 7.22266 6.17 7.41002L2.61 11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4805 24 11.7348 24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8947 23.2652 13 23 13H2.55L6.17 16.61C6.26373 16.703 6.33812 16.8136 6.38889 16.9354C6.43966 17.0573 6.4658 17.188 6.4658 17.32C6.4658 17.452 6.43966 17.5827 6.38889 17.7046C6.33812 17.8265 6.26373 17.9371 6.17 18.03C6.07704 18.1238 5.96643 18.1981 5.84458 18.2489C5.72272 18.2997 5.59201 18.3258 5.46 18.3258C5.32799 18.3258 5.19728 18.2997 5.07542 18.2489C4.95357 18.1981 4.84296 18.1238 4.75 18.03L0.879999 14.15C0.318197 13.5875 0.00263977 12.825 0.00263977 12.03C0.00263977 11.235 0.318197 10.4725 0.879999 9.91002Z' fill='var(--color-bg-2)' /></svg > ",
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M23.12 9.91002L19.25 6.00002C19.157 5.90629 19.0464 5.8319 18.9246 5.78113C18.8027 5.73036 18.672 5.70422 18.54 5.70422C18.408 5.70422 18.2773 5.73036 18.1554 5.78113C18.0336 5.8319 17.923 5.90629 17.83 6.00002C17.6437 6.18738 17.5392 6.44084 17.5392 6.70502C17.5392 6.96921 17.6437 7.22266 17.83 7.41002L21.39 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4805 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8947 0.734784 13 1 13H21.45L17.83 16.61C17.7363 16.703 17.6619 16.8136 17.6111 16.9354C17.5603 17.0573 17.5342 17.188 17.5342 17.32C17.5342 17.452 17.5603 17.5827 17.6111 17.7046C17.6619 17.8265 17.7363 17.9371 17.83 18.03C17.923 18.1238 18.0336 18.1981 18.1554 18.2489C18.2773 18.2997 18.408 18.3258 18.54 18.3258C18.672 18.3258 18.8027 18.2997 18.9246 18.2489C19.0464 18.1981 19.157 18.1238 19.25 18.03L23.12 14.15C23.6818 13.5875 23.9974 12.825 23.9974 12.03C23.9974 11.235 23.6818 10.4725 23.12 9.91002Z' fill='var(--color-bg-2)' /></svg > "
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Slider autres pages news
    $('.slider-other-pages').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M0.879999 9.91002L4.75 6.00002C4.84296 5.90629 4.95357 5.8319 5.07542 5.78113C5.19728 5.73036 5.32799 5.70422 5.46 5.70422C5.59201 5.70422 5.72272 5.73036 5.84458 5.78113C5.96643 5.8319 6.07704 5.90629 6.17 6.00002C6.35625 6.18738 6.46079 6.44084 6.46079 6.70502C6.46079 6.96921 6.35625 7.22266 6.17 7.41002L2.61 11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4805 24 11.7348 24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8947 23.2652 13 23 13H2.55L6.17 16.61C6.26373 16.703 6.33812 16.8136 6.38889 16.9354C6.43966 17.0573 6.4658 17.188 6.4658 17.32C6.4658 17.452 6.43966 17.5827 6.38889 17.7046C6.33812 17.8265 6.26373 17.9371 6.17 18.03C6.07704 18.1238 5.96643 18.1981 5.84458 18.2489C5.72272 18.2997 5.59201 18.3258 5.46 18.3258C5.32799 18.3258 5.19728 18.2997 5.07542 18.2489C4.95357 18.1981 4.84296 18.1238 4.75 18.03L0.879999 14.15C0.318197 13.5875 0.00263977 12.825 0.00263977 12.03C0.00263977 11.235 0.318197 10.4725 0.879999 9.91002Z' fill='var(--color-bg-2)' /></svg > ",
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M23.12 9.91002L19.25 6.00002C19.157 5.90629 19.0464 5.8319 18.9246 5.78113C18.8027 5.73036 18.672 5.70422 18.54 5.70422C18.408 5.70422 18.2773 5.73036 18.1554 5.78113C18.0336 5.8319 17.923 5.90629 17.83 6.00002C17.6437 6.18738 17.5392 6.44084 17.5392 6.70502C17.5392 6.96921 17.6437 7.22266 17.83 7.41002L21.39 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4805 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8947 0.734784 13 1 13H21.45L17.83 16.61C17.7363 16.703 17.6619 16.8136 17.6111 16.9354C17.5603 17.0573 17.5342 17.188 17.5342 17.32C17.5342 17.452 17.5603 17.5827 17.6111 17.7046C17.6619 17.8265 17.7363 17.9371 17.83 18.03C17.923 18.1238 18.0336 18.1981 18.1554 18.2489C18.2773 18.2997 18.408 18.3258 18.54 18.3258C18.672 18.3258 18.8027 18.2997 18.9246 18.2489C19.0464 18.1981 19.157 18.1238 19.25 18.03L23.12 14.15C23.6818 13.5875 23.9974 12.825 23.9974 12.03C23.9974 11.235 23.6818 10.4725 23.12 9.91002Z' fill='var(--color-bg-2)' /></svg > "
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        margin: 13,
        responsive: {
            0: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 3,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                items: 4,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 4,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Ajouter une classe pour les News actives
    function newsActived() {
        $('.slider-other-pages .owl-item.active').first().addClass('is-active');

        $('.slider-other-pages').on('click', '.newslist-contain', function (event) {
            event.preventDefault();

            $('.slider-other-pages .owl-item').removeClass('is-active');

            $(this).closest('.owl-item').addClass('is-active');

            selectNewsFromCarousel();
        });
    }

    // ****** Ajouter une classe à la news sélectionnée
    function selectNewsFromCarousel() {
        const $activeItem = $('.slider-other-pages .owl-item.is-active a.newslist-contain');
        if ($activeItem.length === 0) return;

        const targetId = $activeItem.attr('href');
        if (!targetId) return;

        const cleanId = targetId.replace('#', '');

        $('.news-page-news').removeClass('is-selected');
        const $matchingSection = $(`.news-page-news[id="${cleanId}"]`);
        if ($matchingSection.length) {
            $matchingSection.addClass('is-selected');

            toggleSeeMoreVisibility($matchingSection);
        }
    }

    // ****** Pour btn de descrip News
    function toggleSeeMoreVisibility($scope = $(document)) {
        $scope.find(".title-and-descrip-page").each(function () {
            const $container = $(this);
            const $descriptionNews = $container.find(".description.description-page-news");
            const $seeMore = $container.find(".seeMore3");

            if ($descriptionNews[0].scrollHeight > $descriptionNews[0].clientHeight) {
                $seeMore.show();
            } else {
                $seeMore.hide();
            }
        });
    }

    // ****** Voir plus voir moins descrip News
    function seeMoreSeeLessDescripNews() {
        // ****** Clic description news page
        // Fonction pour vérifier si le bouton "Voir plus" doit être affiché
        function toggleSeeMoreVisibility() {
            $(".news-page-news .title-and-descrip-page").each(function () {
                var $container = $(this);
                var $descriptionNews = $container.find(".description.description-page-news");
                var $seeMore = $container.find(".seeMore3");

                // Vérifie si la description est trop longue et affiche/masque le bouton "Voir plus"
                if ($descriptionNews[0].scrollHeight > $descriptionNews[0].clientHeight) {
                    $seeMore.show();
                } else {
                    $seeMore.hide();
                }
            });
        }

        // Appelle cette fonction au chargement de la page
        toggleSeeMoreVisibility();

        // Clic sur "Voir plus"
        $(".seeMore3").on("click", function (e) {
            e.preventDefault();
            var $container = $(this).closest(".news-page-news .title-and-descrip-page");
            var $descriptionNews = $container.find(".description.description-page-news");

            $descriptionNews.addClass("expanded");
            $container.find(".seeMore3").hide();
            $container.find(".seeLess3").show();
        });

        // Clic sur "Voir moins"
        $(".seeLess3").on("click", function (e) {
            e.preventDefault();
            var $container = $(this).closest(".news-page-news .title-and-descrip-page");
            var $descriptionNews = $container.find(".description.description-page-news");

            $descriptionNews.removeClass("expanded");
            $container.find(".seeMore3").show();
            $container.find(".seeLess3").hide();
        });
    }

    // ****** Slider Galerie News Page
    function sliderGalleryNewsPage() {
        const wrappers = document.querySelectorAll('.Carousel-slider-class');

        console.log(`[sliderGalleryNewsPage] Found ${wrappers.length} sliders`);

        wrappers.forEach((wrapper, index) => {
            const CaroS = wrapper.querySelector('.Carousel-slider');
            if (!CaroS) {
                console.warn(`[Slider ${index}] .Carousel-slider not found`);
                return;
            }

            console.log(`[Slider ${index}] Initializing slider`);

            const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
            const hammer = new Hammer(CaroS);
            const CaroSTimer = 7000;

            let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

            const prevBtn = wrapper.querySelector('.prev-slide-class');
            const nextBtn = wrapper.querySelector('.next-slide-class');

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    clearInterval(CaroAutoplay);
                    CaroSlider.prev();
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    clearInterval(CaroAutoplay);
                    CaroSlider.next();
                });
            }

            // Cacher les indicateurs si trop nombreux
            setTimeout(() => {
                const indicators = wrapper.querySelectorAll('.indicators li');
                if (indicators.length > 5) {
                    indicators.forEach((li, i) => {
                        if (i >= 5) li.style.display = 'none';
                    });
                }
            }, 500);

            // Gestes tactiles
            hammer.on('swipe', () => {
                clearInterval(CaroAutoplay);
                CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
            });

            // Pause au survol
            CaroS.addEventListener('mouseenter', () => clearInterval(CaroAutoplay));
            CaroS.addEventListener('mouseleave', () => {
                clearInterval(CaroAutoplay);
                CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
            });

            // Clics sur images
            wrapper.querySelectorAll('.slider-item').forEach((el) => {
                el.addEventListener('click', () => {
                    const href = el.dataset.href;
                    if (href && href !== '#') window.open(href, '_blank');
                });
            });
        });
    };

    // ****** Slider autres prestas
    $('.slider-other-prestas').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M0.879999 9.91002L4.75 6.00002C4.84296 5.90629 4.95357 5.8319 5.07542 5.78113C5.19728 5.73036 5.32799 5.70422 5.46 5.70422C5.59201 5.70422 5.72272 5.73036 5.84458 5.78113C5.96643 5.8319 6.07704 5.90629 6.17 6.00002C6.35625 6.18738 6.46079 6.44084 6.46079 6.70502C6.46079 6.96921 6.35625 7.22266 6.17 7.41002L2.61 11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4805 24 11.7348 24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8947 23.2652 13 23 13H2.55L6.17 16.61C6.26373 16.703 6.33812 16.8136 6.38889 16.9354C6.43966 17.0573 6.4658 17.188 6.4658 17.32C6.4658 17.452 6.43966 17.5827 6.38889 17.7046C6.33812 17.8265 6.26373 17.9371 6.17 18.03C6.07704 18.1238 5.96643 18.1981 5.84458 18.2489C5.72272 18.2997 5.59201 18.3258 5.46 18.3258C5.32799 18.3258 5.19728 18.2997 5.07542 18.2489C4.95357 18.1981 4.84296 18.1238 4.75 18.03L0.879999 14.15C0.318197 13.5875 0.00263977 12.825 0.00263977 12.03C0.00263977 11.235 0.318197 10.4725 0.879999 9.91002Z' fill='var(--color-bg-2)' /></svg > ",
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M23.12 9.91002L19.25 6.00002C19.157 5.90629 19.0464 5.8319 18.9246 5.78113C18.8027 5.73036 18.672 5.70422 18.54 5.70422C18.408 5.70422 18.2773 5.73036 18.1554 5.78113C18.0336 5.8319 17.923 5.90629 17.83 6.00002C17.6437 6.18738 17.5392 6.44084 17.5392 6.70502C17.5392 6.96921 17.6437 7.22266 17.83 7.41002L21.39 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4805 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8947 0.734784 13 1 13H21.45L17.83 16.61C17.7363 16.703 17.6619 16.8136 17.6111 16.9354C17.5603 17.0573 17.5342 17.188 17.5342 17.32C17.5342 17.452 17.5603 17.5827 17.6111 17.7046C17.6619 17.8265 17.7363 17.9371 17.83 18.03C17.923 18.1238 18.0336 18.1981 18.1554 18.2489C18.2773 18.2997 18.408 18.3258 18.54 18.3258C18.672 18.3258 18.8027 18.2997 18.9246 18.2489C19.0464 18.1981 19.157 18.1238 19.25 18.03L23.12 14.15C23.6818 13.5875 23.9974 12.825 23.9974 12.03C23.9974 11.235 23.6818 10.4725 23.12 9.91002Z' fill='var(--color-bg-2)' /></svg > "
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                items: 3,
                margin: 32,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 3,
                margin: 32,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Slider options
    $('.slider-options').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoWidth: true,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M0.879999 9.91002L4.75 6.00002C4.84296 5.90629 4.95357 5.8319 5.07542 5.78113C5.19728 5.73036 5.32799 5.70422 5.46 5.70422C5.59201 5.70422 5.72272 5.73036 5.84458 5.78113C5.96643 5.8319 6.07704 5.90629 6.17 6.00002C6.35625 6.18738 6.46079 6.44084 6.46079 6.70502C6.46079 6.96921 6.35625 7.22266 6.17 7.41002L2.61 11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4805 24 11.7348 24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8947 23.2652 13 23 13H2.55L6.17 16.61C6.26373 16.703 6.33812 16.8136 6.38889 16.9354C6.43966 17.0573 6.4658 17.188 6.4658 17.32C6.4658 17.452 6.43966 17.5827 6.38889 17.7046C6.33812 17.8265 6.26373 17.9371 6.17 18.03C6.07704 18.1238 5.96643 18.1981 5.84458 18.2489C5.72272 18.2997 5.59201 18.3258 5.46 18.3258C5.32799 18.3258 5.19728 18.2997 5.07542 18.2489C4.95357 18.1981 4.84296 18.1238 4.75 18.03L0.879999 14.15C0.318197 13.5875 0.00263977 12.825 0.00263977 12.03C0.00263977 11.235 0.318197 10.4725 0.879999 9.91002Z' fill='var(--color-bg-2)' /></svg > ",
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M23.12 9.91002L19.25 6.00002C19.157 5.90629 19.0464 5.8319 18.9246 5.78113C18.8027 5.73036 18.672 5.70422 18.54 5.70422C18.408 5.70422 18.2773 5.73036 18.1554 5.78113C18.0336 5.8319 17.923 5.90629 17.83 6.00002C17.6437 6.18738 17.5392 6.44084 17.5392 6.70502C17.5392 6.96921 17.6437 7.22266 17.83 7.41002L21.39 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4805 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8947 0.734784 13 1 13H21.45L17.83 16.61C17.7363 16.703 17.6619 16.8136 17.6111 16.9354C17.5603 17.0573 17.5342 17.188 17.5342 17.32C17.5342 17.452 17.5603 17.5827 17.6111 17.7046C17.6619 17.8265 17.7363 17.9371 17.83 18.03C17.923 18.1238 18.0336 18.1981 18.1554 18.2489C18.2773 18.2997 18.408 18.3258 18.54 18.3258C18.672 18.3258 18.8027 18.2997 18.9246 18.2489C19.0464 18.1981 19.157 18.1238 19.25 18.03L23.12 14.15C23.6818 13.5875 23.9974 12.825 23.9974 12.03C23.9974 11.235 23.6818 10.4725 23.12 9.91002Z' fill='var(--color-bg-2)' /></svg > "
        ],
        responsiveClass: true,
        dots: false,
        margin: 16,
        responsive: {
            0: {
                nav: true,
                autoWidth: true,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                nav: false,
                autoWidth: false,
                items: 3,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                nav: false,
                autoWidth: false,
                items: 3,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                nav: false,
                autoWidth: false,
                items: 4,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Voir plus voir moins descrip cartes cadeaux
    function seeMoreSeeLessGiftcards() {
        // Fonction pour afficher ou masquer le bouton "Voir plus" si le texte dépasse
        function toggleSeeMoreVisibilityGiftcards() {
            document.querySelectorAll(".description-giftcards").forEach(description => {
                const seeMoreBtn = description.closest(".descrip-giftcards-contain").querySelector(".seeMore4");

                if (description.scrollHeight > description.clientHeight) {
                    seeMoreBtn.style.display = "block";
                } else {
                    seeMoreBtn.style.display = "none";
                }
            });
        }

        // Appelle la fonction au chargement
        toggleSeeMoreVisibilityGiftcards();

        // Clic sur "Voir plus"
        document.querySelectorAll(".seeMore4 .more-less-btn").forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                const container = this.closest(".descrip-giftcards-contain");
                const description = container.querySelector(".description-giftcards");

                description.classList.add("expanded");
                container.querySelector(".seeMore4").style.display = "none";
                container.querySelector(".seeLess4").style.display = "block";
            });
        });

        // Clic sur "Voir moins"
        document.querySelectorAll(".seeLess4 .more-less-btn").forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                const container = this.closest(".descrip-giftcards-contain");
                const description = container.querySelector(".description-giftcards");

                description.classList.remove("expanded");
                container.querySelector(".seeMore4").style.display = "block";
                container.querySelector(".seeLess4").style.display = "none";
            });
        });
    }

    // ****** Prix cheques cadeaux
    function allPriceVouchersAndSlider() {
        // Clics sur les liens des prix chèques cadeaux
        $('.all-prices-vouchers a').on('click', function (event) {
            event.preventDefault();

            var targetId = $(this).attr('id');

            // Trouver l'élément correspondant dans le slider
            var targetElement = $(targetId);
            if (targetElement.length) {
                var index = $('.slider-vouchers').find('.owl-item').filter(function () {
                    return $(this).find(targetId).length > 0;
                }).index();

                // Si un index valide est trouvé, déplacer le slider
                if (index !== -1) {
                    $('.slider-vouchers').trigger('to.owl.carousel', [index, 600]);
                } else {
                    console.error("Impossible de trouver l'index dans Owl Carousel pour :", targetId);
                }
            } else {
                console.error("Cible non trouvée pour :", targetId);
            }
        });

        // ****** Slider vouchers
        $('.slider-vouchers').owlCarousel({
            loop: false,
            rewind: true,
            autoplay: false,
            autoHeight: true,
            responsiveClass: true,
            dots: false,
            nav: false,
            items: 1,
            responsive: {
                0: {
                    touchDrag: true,
                    mouseDrag: true,
                },
                1220: {
                    touchDrag: false,
                    mouseDrag: true,
                },
            }
        });
    }

    // ****** Initialisation des modules autres pages
    if ($('main').hasClass('news-page')) {
        newsActived();
        selectNewsFromCarousel();
        seeMoreSeeLessDescripNews();
        sliderGalleryNewsPage();
    }
    if ($('main').hasClass('detail-page')) {
        followCards();
    }
    if ($('main').hasClass('gifts-page')) {
        seeMoreSeeLessGiftcards();
        followCards();
        allPriceVouchersAndSlider();
    }
    if ($('main').hasClass('around-page')) {
        followCards();
    }
    if ($('main').hasClass('special-offers-page')) {
        seeMoreSeeLessDescripSpecialOffer();
    }

    // ****** Initialisation des modules
    initMenu();
    initSubMenu();
    initDescriptionToggle();
    initWeatherTranslation();
    initWeatherImg();
    initSceaToggle();
    sliderGallery();
    seeMoreSeeLessDescripSpecialOffer();
    followCards();
});