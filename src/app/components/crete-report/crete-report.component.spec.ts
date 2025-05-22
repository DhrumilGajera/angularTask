import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteReportComponent } from './crete-report.component';

describe('CreteReportComponent', () => {
  let component: CreteReportComponent;
  let fixture: ComponentFixture<CreteReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreteReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
