import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlighttextComponent } from './highlighttext.component';

describe('HighlighttextComponent', () => {
  let component: HighlighttextComponent;
  let fixture: ComponentFixture<HighlighttextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlighttextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlighttextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
