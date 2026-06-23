import { Injectable, signal } from '@angular/core';

// Se utiliza Angular Signals en lugar de RxJS Subjects por su menor
// overhead computacional. Un signal almacena un valor y notifica
// automáticamente a la vista cuando este cambia, sin necesidad de
// suscripciones manuales. Se emplea localStorage para persistir la
// preferencia del usuario. En la primera visita se consulta la
// configuración del sistema operativo mediante prefers-color-scheme.
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) {
      this.theme.set(saved);
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.theme.set(prefersDark ? 'dark' : 'light');
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    const next = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(next);
    localStorage.setItem('theme', next);
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.theme() === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}