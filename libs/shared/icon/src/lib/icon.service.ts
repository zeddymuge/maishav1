import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  registerIcon(iconName: string, href = `svg/${iconName}.svg`) {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(href)
    );
  }

  registerIcons(iconNames: string[]) {
    iconNames.forEach((iconName) => {
      this.registerIcon(iconName);
    });
  }
}
