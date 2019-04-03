import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <app-hero-parent></app-hero-parent>
    <app-mission-control></app-mission-control>
    <p appHighlight>Highlight me!</p>
    `
  // <app-sizer [(size)]="fontSizePx"></app-sizer>
  // <div [style.font-size.px]="fontSizePx">Resizable Text</div>
  // <app-loop-back></app-loop-back>
  // <app-key-up1></app-key-up1>
  // <app-loop-back></app-loop-back>
  // <app-little-tour></app-little-tour>
  // <app-hero-parent></app-hero-parent>

  // <h2 id="appUnless">UnlessDirective</h2>
  // <p>
  //   The condition is currently
  //   <span [ngClass]="{ 'a': !condition, 'b': condition, 'unless': true }">{{condition}}</span>.
  //   <button
  //     (click)="condition = !condition"
  //     [ngClass] = "{ 'a': condition, 'b': !condition }" >
  //     Toggle condition to {{condition ? 'false' : 'true'}}
  //   </button>
  // </p>
  // <p *appUnless="condition" class="unless a">
  //   (A) This paragraph is displayed because the condition is false.
  // </p>
   
  // <p *appUnless="!condition" class="unless b">
  //   (B) Although the condition is true,
  //   this paragraph is displayed because appUnless is set to false.
  // </p>

  
  // <app-power-booster></app-power-booster>
  // <app-power-boost-calculator></app-power-boost-calculator>
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  fontSizePx = 5;
}