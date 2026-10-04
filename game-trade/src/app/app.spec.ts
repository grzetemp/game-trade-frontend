import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the shared page shell', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('mat-toolbar.site-header')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('main.page-content router-outlet')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('mat-toolbar.site-footer')).toBeTruthy();
  });
});
