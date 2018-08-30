import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitedevComponent } from './websitedev.component';

describe('WebsitedevComponent', () => {
  let component: WebsitedevComponent;
  let fixture: ComponentFixture<WebsitedevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitedevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitedevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
