import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SoniatComponent } from './soniat.component';

describe('SoniatComponent', () => {
  let component: SoniatComponent;
  let fixture: ComponentFixture<SoniatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoniatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoniatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
