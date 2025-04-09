import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickPtsComponent } from './click-pts.component';

describe('ClickPtsComponent', () => {
  let component: ClickPtsComponent;
  let fixture: ComponentFixture<ClickPtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickPtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickPtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
