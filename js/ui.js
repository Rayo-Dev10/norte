'use strict';

export function show(element) {
  element.classList.remove('hidden');
}

export function hide(element) {
  element.classList.add('hidden');
}

export function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}
