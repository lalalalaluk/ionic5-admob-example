import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { InterstitialComponent } from './interstitial/interstitial.component';
import { RewardvideoComponent } from './rewardvideo/rewardvideo.component';

const routes: Routes = [
  { path: '', redirectTo: 'Rewardvideo', pathMatch: 'full' },
  { path: 'Banner', component: BannerComponent },
  { path: 'Interstitial', component: InterstitialComponent },
  { path: 'Rewardvideo', component: RewardvideoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
