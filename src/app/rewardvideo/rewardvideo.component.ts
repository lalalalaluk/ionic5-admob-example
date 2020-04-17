import { Component, OnInit } from '@angular/core';
declare var admob;


@Component({
  selector: 'app-rewardvideo',
  templateUrl: './rewardvideo.component.html',
  styleUrls: ['./rewardvideo.component.scss'],
})
export class RewardvideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('admob.reward_video.load', () => {
      console.log('Called when reward video ad is loaded.');
    })

    document.addEventListener('admob.reward_video.load_fail', () => {
      console.log('Called when reward video ad request failed.');
    })

    document.addEventListener('admob.reward_video.open', () => {
      console.log('Called when reward video ad opens a overlay that covers the screen.');
    })

    document.addEventListener('admob.reward_video.close', () => {
      console.log('Called when reward video ad is closed.');
    })

    document.addEventListener('admob.reward_video.start', () => {
      console.log('Called when reward video ad starts to play.');
    })

    document.addEventListener('admob.reward_video.complete', () => {
      console.log('Called when reward video ad completes playing.');
    })

    document.addEventListener('admob.reward_video.reward', () => {
      console.log('Called when reward video ad has triggered a reward.');
    })

    document.addEventListener('admob.reward_video.exit_app', () => {
      console.log('Called when reward video ad leaves the application (e.g., to go to the browser).');
    })

    this.showAd();
  }

  showAd(): void {
    admob.setDevMode(true);
    admob.rewardVideo.load({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-xxx/yyy',
        ios: 'ca-app-pub-xxx/zzz',
      },
    }).then(() => admob.rewardVideo.show())
  }

}
