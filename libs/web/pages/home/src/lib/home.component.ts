import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/src/lib/header.component';
import { WebComponentsHeroComponent } from '@furaha/web/components/hero';
import { WebComponentsAboutComponent } from '@furaha/web/components/about-us';
import { WebComponentsClientsComponent } from '@furaha/web/components/clients';

@Component({
  standalone: true,
  templateUrl: 'home.component.html',
  imports: [
    HeaderComponent,
    WebComponentsHeroComponent,
    WebComponentsAboutComponent,
    WebComponentsClientsComponent
  ],
  styleUrls: ['home.component.scss']
})
export class HomeComponent {}
