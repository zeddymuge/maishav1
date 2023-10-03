import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebComponentsAboutComponent } from './web-components-about.component';

describe('WebComponentsAboutComponent', () => {
  let component: WebComponentsAboutComponent;
  let fixture: ComponentFixture<WebComponentsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebComponentsAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebComponentsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
