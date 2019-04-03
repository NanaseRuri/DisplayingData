import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <p>
      hero works!
    </p>
  `,
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
