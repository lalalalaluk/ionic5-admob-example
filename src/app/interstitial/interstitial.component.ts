import { Component, OnInit } from '@angular/core';
declare var admob;


@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html',
  styleUrls: ['./interstitial.component.scss'],
})
export class InterstitialComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.addEventListener('admob.interstitial.load', () => {
      console.log('Called when interstitial ad is loaded.')
    })

    document.addEventListener('admob.interstitial.load_fail', () => {
      console.log('Called when interstitial ad request failed..')
    })

    document.addEventListener('admob.interstitial.open', () => {
      console.log('Called when interstitial ad opens a overlay that covers the screen.');
    })

    document.addEventListener('admob.interstitial.close', () => {
      console.log('Called when interstitial ad is closed.');
    })

    document.addEventListener('admob.interstitial.exit_app', () => {
      console.log('alled when interstitial ad leaves the application (e.g., to go to the browser).');
    })

    this.showAd();

  }

  showAd(): void {
    admob.setDevMode(true);
    admob.interstitial.load({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-xxx/yyy',
        ios: 'ca-app-pub-xxx/zzz',
      },
    }).then(() => admob.interstitial.show())
  }

}
