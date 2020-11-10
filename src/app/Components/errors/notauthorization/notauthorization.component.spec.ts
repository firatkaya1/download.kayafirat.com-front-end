import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotauthorizationComponent } from './notauthorization.component';

describe('NotauthorizationComponent', () => {
  let component: NotauthorizationComponent;
  let fixture: ComponentFixture<NotauthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotauthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotauthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
