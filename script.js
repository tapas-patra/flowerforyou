onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll('.word');
    let delay = 0;

    words.forEach(word => {
        setTimeout(() => {
            word.classList.add('visible');
        }, delay);
        delay += 500;  // Increase delay for the next word
    });
});
