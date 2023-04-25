import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFolderComponent } from './health-folder.component';

describe('HealthFolderComponent', () => {
  let component: HealthFolderComponent;
  let fixture: ComponentFixture<HealthFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
