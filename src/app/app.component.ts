import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-tip-calculator';
  subtotalWithTax: number;
  subtotal: number;
  showSubInput = true;
  showTaxAdded = false;
  tipPercentage: number;
  tipAmount: number;
  showTipAmount: boolean;

  showWithTax(){
    this.subtotalWithTax = this.subtotal*1.07;
    this.showSubInput = !this.showSubInput;
    this.showTaxAdded = !this.showTaxAdded;
  }

  calculateTip(){
    this.tipAmount = (this.tipPercentage/100*this.subtotalWithTax);
    this.showTipAmount = !this.showTipAmount;
  }

}
