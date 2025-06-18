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

  result: string = '';

  spinAll(){
    this.reels.forEach(reel => reel.spin());

    setTimeout(() => {
      const symbols = this.reels.map(reel => reel.currentSymbol);

      if (symbols.every(symbol => symbol === symbols[0])){
        this.result = 'Win';
      } else {
        this.result = 'Lose';
      }
    }, 100);
  }
}
