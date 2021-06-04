import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  @HostBinding('class.height-100')
  addHeight100Class = true;

  private typingSpeed = 50;
  private blinkSpeed = 1000;
  private removalSpeed = 25;

  ngOnInit(): void {
    this.runTagline();
  }

  runTagline(): void {
    const tagline = document.getElementById('tagline') as HTMLElement;

    this.type(tagline, ['Software Engineer', 'C# Developer', 'Typescript Wizard', 'Angular Tinkerer'], 0, 0, 0);
  }

  private type(tagline: HTMLElement, text: string[], i: number, j: number, k: number): void {
    switch (j) {
      case 0: { // Type characters
        if (i < text[k].length) {
          tagline.innerHTML += text[k].charAt(i);
          i++;
          setTimeout(() => {
            this.type(tagline, text, i, j, k);
          }, this.typingSpeed);
        } else {
          j++;
          this.type(tagline, text, 0, j, k);
        }
        break;
      }
      case 1: { // Show typing indicator
        if (i < 5) {
          if (i % 2) {
            tagline.innerHTML = tagline.innerHTML.slice(0, -1);
          } else {
            tagline.innerHTML += '_';
          }
          i++;
          setTimeout(() => {
            this.type(tagline, text, i, j, k);
          }, this.blinkSpeed);
        } else {
          j++;
          this.type(tagline, text, 0, j, k);
        }
        break;
      } case 2: { // Delete characters
        if (tagline.innerHTML.length > 5) { // "> " equates to "&gt; " which is 5 characters
          tagline.innerHTML = tagline.innerHTML.slice(0, -1);
          setTimeout(() => {
            this.type(tagline, text, i, j, k);
          }, this.removalSpeed);
        } else {
          k++;
          if (k >= text.length) {
            k = 0;
          }
          this.type(tagline, text, 0, 0, k);
        }
        break;
      }
    }
  }
}
