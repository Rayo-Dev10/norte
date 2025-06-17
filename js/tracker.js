'use strict';

import { Storage } from './storage.js';
import { createElement } from './ui.js';

const TRACK_KEY = 'vencehoy_tracker';

export function initTracker(container) {
  const entry = getTodayEntry();
  if (!entry) {
    renderTrackerForm(container);
  }
}

function renderTrackerForm(container) {
  const form = createElement(`
    <form id="trackerForm" class="space-y-2 mt-4">
      <label class="flex items-center space-x-2">
        <span>¿Lograste combatir tu hábito hoy?</span>
        <input type="checkbox" name="success" />
      </label>
      <textarea name="note" placeholder="Nota" class="w-full border p-2"></textarea>
      <button class="bg-green-500 text-white px-4 py-2">Registrar</button>
    </form>
  `);
  container.appendChild(form);
  form.addEventListener('submit', e => {
    e.preventDefault();
    saveToday({
      success: form.success.checked,
      note: form.note.value
    });
    form.remove();
  });
}

function getTodayEntry() {
  const entries = Storage.get(TRACK_KEY) || {};
  const today = new Date().toISOString().split('T')[0];
  return entries[today];
}

function saveToday(data) {
  const entries = Storage.get(TRACK_KEY) || {};
  const today = new Date().toISOString().split('T')[0];
  if (!entries[today]) {
    entries[today] = data;
    Storage.set(TRACK_KEY, entries);
  }
}
