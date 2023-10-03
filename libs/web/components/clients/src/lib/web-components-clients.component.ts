import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'furaha-web-components-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-components-clients.component.html',
  styleUrls: ['./web-components-clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponentsClientsComponent {}
