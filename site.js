function bindStories() {
  const stories = [...document.querySelectorAll("[data-story]")];
  const track = document.querySelector(".story-track");
  const pager = document.querySelector(".stories .pager");
  const playback = pager.querySelector("[data-playback]");
  const status = document.querySelector("#story-status");
  let current = 0;
  let playing = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const progress = document.querySelector(".story-progress");
  progress.hidden = false;
  const interval = 5000;
  let remaining = interval;
  let started;
  let timer;
  const fill = progress.firstElementChild;
  function draw(timeLeft) {
    fill.style.transform = `scaleX(${1 - timeLeft / interval})`;
  }

  function show(direction, announce) {
    current = (current + direction + stories.length) % stories.length;
    track.style.transform = `translateX(-${100 * current}%)`;
    stories.forEach((story, index) => { story.inert = index !== current; });
    if (announce) status.textContent = stories[current].querySelector("h3").textContent;
  }

  function schedule(reset = false) {
    clearInterval(timer);
    const now = performance.now();
    if (reset) remaining = interval;
    else if (started !== undefined) remaining = Math.max(0, remaining - (now - started));
    started = undefined;
    draw(remaining);
    if (playing && !document.hidden) {
      started = now;
      timer = setInterval(() => {
        const timeLeft = remaining - (performance.now() - started);
        if (timeLeft > 0) draw(timeLeft);
        else {
          show(1, false);
          schedule(true);
        }
      }, 40);
    }
    playback.classList.toggle("paused", !playing);
    playback.setAttribute("aria-label", playing ? "자동 전환 일시정지" : "자동 전환 재생");
  }

  stories.forEach((story, index) => {
    story.hidden = false;
    story.inert = index !== current;
  });
  pager.hidden = false;
  pager.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button === playback) playing = !playing;
    else {
      show(Number(button.dataset.turn), true);
    }
    schedule(button !== playback);
  });
  document.addEventListener("visibilitychange", () => schedule());
  schedule();
}

function bindFilm() {
  const video = document.querySelector(".film-frame video");
  const errorText = document.querySelector(".film-error");
  document.querySelector("[data-play-film]").addEventListener("click", event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    video.play().catch(error => {
      if (error.name !== "AbortError") errorText.hidden = false;
    });
  });
  video.addEventListener("playing", () => { errorText.hidden = true; });
  video.addEventListener("error", () => { errorText.hidden = false; });
  video.querySelector("source").addEventListener("error", () => { errorText.hidden = false; });
}

bindStories();
bindFilm();
