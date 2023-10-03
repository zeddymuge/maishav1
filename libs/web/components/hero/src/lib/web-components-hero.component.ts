import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'furaha-web-components-hero',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './web-components-hero.component.html',
  styleUrls: ['./web-components-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponentsHeroComponent {}
