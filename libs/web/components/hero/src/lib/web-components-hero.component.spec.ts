import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebComponentsHeroComponent } from './web-components-hero.component';

describe('WebComponentsHeroComponent', () => {
  let component: WebComponentsHeroComponent;
  let fixture: ComponentFixture<WebComponentsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebComponentsHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebComponentsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
