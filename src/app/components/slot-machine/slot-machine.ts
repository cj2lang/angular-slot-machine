import { Component } from '@angular/core';
import { Reel } from "../reel/reel";

@Component({
  selector: 'app-slot-machine',
  standalone: true,
  imports: [Reel],
  templateUrl: './slot-machine.html',
  styleUrl: './slot-machine.css'
})
export class SlotMachine {

}
