// https://angular.dev/style-guide#introduction
// signal is a function
import { Component, computed, effect, signal } from '@angular/core';

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

  protected count = signal(0);

  // Computed signal represents derived state returns a value, must be pure no side effects
  protected doubleCount = computed(() => this.count() * 2);
  //Effects react to state changes, perform side effects and do NOT return values
  private readonly countLog = effect(() => {
    console.log('Count changed:', this.count());
  });

  protected increaseCounter(): void {
    // count = count +1;
    this.count.update((value) => value + 1);
  }

  protected decreaseCounter(): void {
    // count = count -1;
    this.count.update((value) => value - 1);
  }

  protected resetCounter(): void {
    this.count.set(0);
  }
}
