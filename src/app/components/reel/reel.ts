import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reel.html',
  styleUrl: './reel.css'
})
export class Reel {
  symbols: string[] = ['1', '2', '3', '4', '5', '6', '7',]
  currentSymbol: string = this.symbols[0];

  spin(){
    const index = Math.floor(Math.random() * this.symbols.length);
    this.currentSymbol = this.symbols[index];
  }
}
