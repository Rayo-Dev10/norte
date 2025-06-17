'use strict';

export function initThemeToggle(button) {
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}
