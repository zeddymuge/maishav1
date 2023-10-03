import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebComponentsClientsComponent } from './web-components-clients.component';

describe('WebComponentsClientsComponent', () => {
  let component: WebComponentsClientsComponent;
  let fixture: ComponentFixture<WebComponentsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebComponentsClientsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebComponentsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
