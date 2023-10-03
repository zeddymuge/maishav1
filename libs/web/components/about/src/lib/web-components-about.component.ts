import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'furaha-web-components-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-components-about.component.html',
  styleUrls: ['./web-components-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponentsAboutComponent {}
