import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservacionComponent } from './conservacion.component';

describe('ConservacionComponent', () => {
  let component: ConservacionComponent;
  let fixture: ComponentFixture<ConservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConservacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
