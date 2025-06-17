import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controls.html',
  styleUrl: './controls.css'
})
export class Controls {
  @Output() spinClicked = new EventEmitter<void>();

  triggerSpin() {
    this.spinClicked.emit();
  }
}
