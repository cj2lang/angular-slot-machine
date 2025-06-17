import { Component, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reel } from "../reel/reel";
import { Controls } from '../controls/controls';

@Component({
  selector: 'app-slot-machine',
  standalone: true,
  imports: [Reel, CommonModule, Controls],
  templateUrl: './slot-machine.html',
  styleUrl: './slot-machine.css'
})
export class SlotMachine {
  @ViewChildren(Reel) reels!: QueryList<Reel>;

  spinAll(){
    this.reels.forEach(reel => reel.spin());
  }
}
