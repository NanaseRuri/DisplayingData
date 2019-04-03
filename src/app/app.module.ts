import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SizerComponent } from './sizer/sizer.component';
import {FormsModule} from '@angular/forms';
import {  ClickMeComponent } from './click-me/click-me.component';
import { LoopbackComponent } from './loop-back/loop-back.component';
import { LittleTourComponent } from './little-tour/little-tour.component';
import {KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4} from './keyup/keyup.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import {AstronautComponent} from './astronaut/astronaut.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup.service';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ExponentialStrengthPipe } from './exponential-strength-pipe.pipe';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import {PowerBoostCalculatorComponent} from './power-boost-calculator/power-boost-calculator.component';
import { FlyingHeroesImpurePipe } from './flying-heroes-impure.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { FetchJsonPipe } from './fetch-json.pipe';
import {HeroListComponent} from './HeroListComponent';
import { AdDirective } from 'src/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SizerComponent,
    ClickMeComponent,
    LoopbackComponent,
    LittleTourComponent,
    KeyUpComponent_v1,
    HeroChildComponent,
    HeroParentComponent,
    MissionControlComponent,
    AstronautComponent,
    PopupComponent,
    HighlightDirective,
    UnlessDirective,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesImpurePipe,
    FlyingHeroesPipe,
    HeroAsyncMessageComponent,
    FetchJsonPipe,
    HeroListComponent,
    AdDirective,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent]
})
export class AppModule { }
