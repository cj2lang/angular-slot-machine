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
  symbols: string[] = [
    'assets/bomb.png',
    'assets/box.png',
    'assets/chest.png',
    'assets/coin.png',
    'assets/diamond.png',
    'assets/heart.png',
    'assets/potion.png',
  ]
  currentSymbol: string = this.symbols[0];

  spin(){
    const index = Math.floor(Math.random() * this.symbols.length);
    this.currentSymbol = this.symbols[index];
  }


}