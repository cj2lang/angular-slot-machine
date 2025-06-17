import { Component } from '@angular/core';
import { SlotMachine } from "./components/slot-machine/slot-machine";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SlotMachine],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-slot-machine';
}
