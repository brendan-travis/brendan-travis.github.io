import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  private i = 0;
  private typingSpeed = 50;
  private blinkSpeed = 1000;
  private removalSpeed = 25;

  constructor() { }

  ngOnInit(): void {
    this.runTagline();
  }

  runTagline(): void {
    const tagline = document.getElementById('tagline') as HTMLElement;

    this.i = 0;
    this.type(tagline, ['Software Engineer', 'C# Developer', 'Typescript Wizard', 'Angular Tinkerer'], 0, 0, 0);
  }

  private type(tagline: HTMLElement, text: string[], i: number, j: number, k: number): void {
    switch(j) {
      case 0: {
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
      case 1: {
        if (i < 5) {
          if (i % 2) {
            tagline.innerHTML = tagline.innerHTML.slice(0, -1);
          } else {
            tagline.innerHTML += '_';
          }
          i++
          setTimeout(() => {
            this.type(tagline, text, i, j, k);
          }, this.blinkSpeed);
        } else {
          j++;
          this.type(tagline, text, 0, j, k);
        }
        break;
      } case 2: {
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

  private clear(tagline: HTMLElement): void {
    if (tagline.innerHTML.length > 0) {
      tagline.innerHTML = tagline.innerHTML.slice(0, -1);
      setTimeout(() => {
        this.clear(tagline)
      }, this.removalSpeed);
    }
  }

  private showUnderscore(tagline: HTMLElement): void {
    if (this.i < 5) {
      tagline.innerHTML += '_';
      setTimeout(() => {
        this.clearUnderscore(tagline)
      }, this.blinkSpeed);
    }
  }

  private clearUnderscore(tagline: HTMLElement): void {
    this.i++;
    tagline.innerHTML += '_';
    setTimeout(() => {
      this.showUnderscore(tagline)
    }, this.blinkSpeed, tagline);
  }
}
