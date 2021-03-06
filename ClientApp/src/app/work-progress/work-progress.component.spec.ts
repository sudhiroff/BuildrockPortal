import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkProgressComponent } from './work-progress.component';

describe('WorkProgressComponent', () => {
  let component: WorkProgressComponent;
  let fixture: ComponentFixture<WorkProgressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
