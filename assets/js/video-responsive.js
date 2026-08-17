(function () {
  function initVideoCards() {
    const cards = Array.from(document.querySelectorAll(".js-yt-card"));
    if (!cards.length) return;

    function stopAll() {
      cards.forEach(card => {
        const iframe = card.querySelector("iframe");
        if (iframe) iframe.remove();

        const posters = card.querySelectorAll(".video_poster");
        posters.forEach(p => (p.style.display = ""));

        card.classList.remove("is-playing");
      });
    }

    function isMobile() {
      // coincide con Bootstrap md: < 768
      return window.matchMedia("(max-width: 767.98px)").matches;
    }

    cards.forEach(card => {
      const posters = card.querySelectorAll(".video_poster");
      posters.forEach(btn => {
        btn.addEventListener("click", () => {
          stopAll();

          const videoId = isMobile()
            ? card.getAttribute("data-video-id-mobile")
            : card.getAttribute("data-video-id-desktop");

          // Oculta ambos posters (por si cambias tamaño)
          posters.forEach(p => (p.style.display = "none"));

          card.classList.add("is-playing");

          const iframe = document.createElement("iframe");
          iframe.className = "video_iframe";
          iframe.allowFullscreen = true;
          iframe.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          );
          iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=0`;

          card.appendChild(iframe);
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initVideoCards);
})();
