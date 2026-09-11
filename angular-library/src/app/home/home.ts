// https://angular.dev/style-guide#introduction

import { Component } from '@angular/core';

@Component({
  // Name of hmtl tag that allows us to reuse component
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
