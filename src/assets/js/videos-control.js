// Seleciona TODOS os vídeos verticais
const videos = document.querySelectorAll(".video");

videos.forEach(video => {
  const container = video.parentElement;
  const playBtn = container.querySelector(".play-btn");

  function pauseAllExcept(current) {
    videos.forEach(v => {
      if (v !== current) {
        v.pause();
        const btn = v.parentElement.querySelector(".play-btn");
        if (btn) {
          btn.style.opacity = "1";
          btn.style.pointerEvents = "auto";
        }
      }
    });
  }

  function togglePlay(e) {
    if (video.paused) {
      pauseAllExcept(video);
      video.play();

      // FULLSCREEN — só tenta, se o navegador permitir
      if (!document.fullscreenElement && video.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
      }

      playBtn.style.opacity = "0";
      playBtn.style.pointerEvents = "none";
    } else {
      video.pause();
      playBtn.style.opacity = "1";
      playBtn.style.pointerEvents = "auto";
    }
  }

  playBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);

  video.addEventListener("ended", () => {
    playBtn.style.opacity = "1";
    playBtn.style.pointerEvents = "auto";
  });
});