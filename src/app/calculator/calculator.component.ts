import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  display: string = '0';
  calculatedFlag: boolean = false;
  constructor() {}

  onClick(num: string): void {
    if (this.calculatedFlag == true) {
      this.display = '0';
      this.calculatedFlag = false;
    }
    if (this.display == '0') {
      this.display = num;
    } else {
      this.display = this.display + num;
    }
  }
  onClear(): void {
    this.display = '0';
  }
  onEqual(): void {
    let formula = this.display;

    // get the last key
    let lastInput = formula[formula.length - 1];

    if (
      lastInput === '/' ||
      lastInput === '+' ||
      lastInput === '*' ||
      lastInput === '-'
    ) {
      formula = formula.substr(0, formula.length - 1);
    }
    console.log('Formula ' + formula);
    this.display = eval(formula);
    this.calculatedFlag = true;
  }
  ngOnInit(): void {}
}
