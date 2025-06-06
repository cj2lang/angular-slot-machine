import { Component } from '@angular/core';
import { SlotMachine } from "./components/slot-machine/slot-machine";
import { Controls } from "./components/controls/controls";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SlotMachine, Controls],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-slot-machine';
}
