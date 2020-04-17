import { Component, OnInit } from '@angular/core';
declare var admob;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('admob.banner.load', () => {
      console.log('admob banner loaded');
    });

    document.addEventListener('admob.banner.load_fail', () => {
      console.log('admob banner loaded fail');
    });

    document.addEventListener('admob.banner.open', () => {
      console.log('Called when user tap on the banner ad.');
    });

    document.addEventListener('admob.banner.exit_app', () => {
      console.log('Called after Open Event, when a user click opens another app (such as the Google Play), backgrounding the current app.');
    });

    document.addEventListener('admob.banner.close', () => {
      console.log("When a user returns to the app after viewing an ad's destination URL, this method is invoked. Your app can use\
       it to resume suspended activities or perform any other work necessary to make itself ready for interaction.");
    })
  }

  show(): void {
    admob.setDevMode(true);
    admob.banner.show({
      id: {
        android: 'ca-app-pub-xxx~xxx',
        ios: 'ca-app-pub-xxx~xxx',
      },
      // position: 'top',
    });
  }

  hide(): void {
    admob.banner.hide({
      id: {
        android: 'ca-app-pub-xxx~xxx',
        ios: 'ca-app-pub-xxx~xxx',
      }
    });
  }
}



/*
  source: https://admob-plus.github.io/docs/show-banner.html

  interface IBannerRequest extends IAdRequest {
    position?: BannerPosition
    size?: AdSize
  }

  type BannerPosition = 'bottom' | 'top'

  type AdSize =
    | AdSizeType
    | {
        width: number;
        height: number;
      }

  enum AdSizeType {
    BANNER,
    LARGE_BANNER,
    MEDIUM_RECTANGLE,
    FULL_BANNER,
    LEADERBOARD,
    SMART_BANNER,
  }
*/

