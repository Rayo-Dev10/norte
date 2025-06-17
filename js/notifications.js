'use strict';

export function initNotifications(button) {
  button.addEventListener('click', async () => {
    if (Notification.permission === 'granted') {
      new Notification('Recordatorio de Vence Hoy');
    } else if (Notification.permission !== 'denied') {
      const perm = await Notification.requestPermission();
      if (perm === 'granted') new Notification('Recordatorio de Vence Hoy');
    }
  });
}
