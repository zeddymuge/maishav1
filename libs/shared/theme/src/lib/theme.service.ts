import { Injectable, signal, Renderer2, RendererFactory2 } from '@angular/core';

type IAppTheme = 'light-mode' | 'dark-mode';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  private renderer: Renderer2;

  // constructor(rendererFactory: RendererFactory2) {
  //   this.renderer = rendererFactory.createRenderer(null, null);
  // }
  private themeStorageKey = 'app-theme';
  appTheme = signal<IAppTheme>('light-mode');

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.getStoredTheme();
    this.setTheme();
  }

  private storeTheme() {
    localStorage.setItem(this.themeStorageKey, this.appTheme());
  }

  private getStoredTheme() {
    const storedKey = localStorage.getItem(this.themeStorageKey);
    if (storedKey === 'dark-mode') {
      this.appTheme.set('dark-mode');
    }
  }

  setTheme() {
    if (this.appTheme() === 'dark-mode') {
      this.renderer.addClass(document.querySelector('body'), 'theme-alternate');
    } else {
      this.renderer.removeClass(document.querySelector('body'), 'theme-alternate');
    }
  }

  toggleTheme() {
    this.appTheme.set(this.appTheme() === 'dark-mode' ? 'light-mode' : 'dark-mode');
    this.storeTheme();
    this.setTheme();
  }
}
