import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class FormComponent {
  currentInput: string = '';
  result: number = 0;
  operation: string = '';

  appendNumber(num: string) {
    this.currentInput += num;
  }

  setOperation(op: string) {
    if (this.currentInput) {
      this.result = parseFloat(this.currentInput);
      this.operation = op;
      this.currentInput = '';
    }
  }

  calculate() {
    if (this.currentInput) {
      const num = parseFloat(this.currentInput);
      switch (this.operation) {
        case '+':
          this.result += num;
          break;
        case '-':
          this.result -= num;
          break;
        case '*':
          this.result *= num;
          break;
        case '/':
          if (num === 0) {
            this.result = NaN;
          } else {
            this.result /= num;
          }
          break;
        default:
          break;
      }
      this.currentInput = this.result.toString();
      this.operation = '';
    }
  }

  clear() {
    this.currentInput = '';
    this.result = 0;
    this.operation = '';
  }

  backspace() {
    this.currentInput = this.currentInput.slice(0, -1);
  }
}
