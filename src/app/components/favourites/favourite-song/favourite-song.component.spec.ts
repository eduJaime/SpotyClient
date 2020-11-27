import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSongComponent } from './favourite-song.component';

describe('FavouriteSongComponent', () => {
  let component: FavouriteSongComponent;
  let fixture: ComponentFixture<FavouriteSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
