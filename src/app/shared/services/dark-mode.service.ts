import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  isDark = false;
  preference: 'auto' | 'dark' | 'light' = 'auto';

  constructor() {
    this.initTheme();
  }

  initTheme(): void{
    const themeSav = localStorage.getItem('theme');
    if (themeSav){
      if (themeSav === 'dark'){
        this.setThemeDark();
      }
    }else{
      this.setSystemPreference();
    }
  }

  setThemeDark(): void{
    document.body.classList.add('dark');
    this.isDark = true;
    localStorage.setItem('theme', 'dark');
  }

  setThemeLight(): void{
    document.body.classList.remove('dark');
    this.isDark = false;
    localStorage.setItem('theme', 'light');
  }
  setSystemPreference(): void{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      this.setThemeDark();
      return;
    }else{
      this.setThemeLight();
      return;
    }
  }

  toggleTheme(): void{
    if (this.isDark){
      this.setThemeLight();
    }else{
      this.setThemeDark();
    }
  }
}
