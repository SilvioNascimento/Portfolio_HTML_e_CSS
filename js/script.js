document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // Parâmetros básicos
    loop: true,
    grabCursor: true,
    spaceBetween: 80,

    // Paginação (os pontinhos)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Setas de navegação
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Configuração de quantos cards aparecem por vez
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
