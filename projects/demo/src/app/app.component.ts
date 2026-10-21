import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NGC Guidelines';
  activeTheme: 'default' | 'tokyo-night' = 'default';
  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark-theme');
    this.setTheme('default');
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode = isDark;
    this.setTheme(this.activeTheme);
  }

  async setTheme(themeName: 'default' | 'tokyo-night') {
    this.activeTheme = themeName;
    document.documentElement.setAttribute('theme', themeName);
    try {
      if (themeName === 'tokyo-night') {
        const tokyoNight = this.isDarkMode
          ? (await import('../../../ngc-library/src/lib/scss/dssign-token/tokyo-night.json')).default
          : (await import('../../../ngc-library/src/lib/scss/dssign-token/tokyo-night-light.json')).default;
        this.applyDesignTokens(tokyoNight);
      } else {
        const tokens = (await import('../../../ngc-library/src/lib/scss/dssign-token/tokens.json')).default;
        this.applyDesignTokens(tokens);
      }
    } catch (e) {
      console.warn('Error loading design tokens:', e);
    }
  }

  applyDesignTokens(tokens: any, targetEl: HTMLElement = document.documentElement, prefix: string = '--ngc-') {
    if (!tokens) return;
    const cssVariables: Record<string, string> = {};

    const convertReferenceToCssVar = (value: any): string => {
      if (typeof value !== 'string') return String(value);
      return value.replace(/\{([^}]+)\}/g, (_, pathStr) => {
        const parts = pathStr.split('.');
        const cleanParts = parts.slice(1);
        return `var(${prefix}${cleanParts.join('-')})`;
      });
    };

    const traverse = (obj: any, path: string[] = []) => {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const currentPath = [...path, key];
          const value = obj[key];

          if (typeof value === 'object' && value !== null) {
            traverse(value, currentPath);
          } else {
            const cleanPath = currentPath.slice(1);
            const varName = `${prefix}${cleanPath.join('-')}`;
            cssVariables[varName] = convertReferenceToCssVar(value);
          }
        }
      }
    };

    traverse(tokens);

    Object.entries(cssVariables).forEach(([varName, value]) => {
      targetEl.style.setProperty(varName, value);
    });
  }
}
