function bindStories() {
  const stories = [...document.querySelectorAll("[data-story]")];
  const pager = document.querySelector(".stories .pager");
  const status = document.querySelector("#story-status");
  let current = 0;
  pager.hidden = false;
  pager.addEventListener("click", event => {
    const button = event.target.closest("button[data-turn]");
    if (!button) return;
    stories[current].hidden = true;
    current = (current + Number(button.dataset.turn) + stories.length) % stories.length;
    const story = stories[current];
    story.hidden = false;
    status.textContent = [story.querySelector("h3"), story.querySelector("time")].map(el => el.textContent).join(", ");
  });
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
