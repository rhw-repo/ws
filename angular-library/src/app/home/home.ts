// https://angular.dev/style-guide#introduction

import { Component } from '@angular/core';

@Component({
  // Name of hmtl tag that allows us to reuse component
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected title = 'Chingu Devs Book Club';
  protected subtitle = 'Reading List';
  protected subtitleParagraph = 'Your personal shelf, shared with the club. Move a book as you go.';
  // Demo of property binding - set disabled property in an array to isDsiabled in HTML and binds it to false
  protected isDisabled = false;

  protected onClick(): void {
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  }
}
