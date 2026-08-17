(function () {
  function initInlineYouTubeCards() {
    const cards = Array.from(document.querySelectorAll(".js-yt-card"));
    if (!cards.length) return;

    function stopAll() {
      cards.forEach(card => {
        const iframe = card.querySelector("iframe");
        if (iframe) iframe.remove();

        const poster = card.querySelector(".video_poster");
        if (poster) poster.style.display = "";
      });
    }

    cards.forEach(card => {
      const posterBtn = card.querySelector(".video_poster");
      if (!posterBtn) return;

      posterBtn.addEventListener("click", () => {
        // si ya está reproduciendo este, no hagas nada
        if (card.querySelector("iframe")) return;

        // corta otros audios y vuelve a mostrar posters
        stopAll();

        const videoId = card.getAttribute("data-video-id");

        // ✅ TRACKING (GTM / GA4) - OPCIÓN 1
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "video_play",
          video_id: videoId,
          video_context: "lista_videos_peru"
        });

        posterBtn.style.display = "none";

        const iframe = document.createElement("iframe");
        iframe.className = "video_iframe";
        iframe.allowFullscreen = true;
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );

        // Shorts => embed normal funciona perfecto
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=0`;

        card.appendChild(iframe);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initInlineYouTubeCards);
  } else {
    initInlineYouTubeCards();
  }
})();
