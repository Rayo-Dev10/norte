'use strict';

import { Storage } from './storage.js';
import { show, hide, createElement } from './ui.js';

const FORM_KEY = 'vencehoy_profile';

export function initForm(container) {
  const saved = Storage.get(FORM_KEY);
  if (!saved) {
    renderForm(container);
  }
}

function renderForm(container) {
  const form = createElement(`
    <form id="profileForm" class="space-y-2">
      <input required name="nick" placeholder="Apodo" class="w-full border p-2" />
      <input name="age" type="number" placeholder="Edad" class="w-full border p-2" />
      <input required name="habit" placeholder="Hábito negativo" class="w-full border p-2" />
      <input name="goal" type="number" placeholder="Meta de días" class="w-full border p-2" />
      <button class="bg-blue-500 text-white px-4 py-2">Guardar</button>
    </form>
  `);
  container.appendChild(form);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    Storage.set(FORM_KEY, data);
    form.remove();
  });
}
