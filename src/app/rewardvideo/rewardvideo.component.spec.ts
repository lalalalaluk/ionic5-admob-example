import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardvideoComponent } from './rewardvideo.component';

describe('RewardvideoComponent', () => {
  let component: RewardvideoComponent;
  let fixture: ComponentFixture<RewardvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardvideoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
