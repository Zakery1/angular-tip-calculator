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
  tipPercentage: number;
  showSubInput = true;
  showTaxAdded = false;
  showTipRequest = false;
  tipAmount;
  showTipAmount = false;
  tipSubmitted = false;
  grandTotal: string;
  tipConfirmed = false;

  showWithTax(){
    this.subtotalWithTax = +(this.subtotal*1.07).toFixed(2);
    this.showSubInput = !this.showSubInput;
    this.showTaxAdded = !this.showTaxAdded;
    this.showTipRequest = !this.showTipRequest;
  }

  calculateTip(){
    this.tipAmount = (this.tipPercentage/100*this.subtotalWithTax).toFixed(2);
    this.showTipAmount = !this.showTipAmount;
    this.tipSubmitted = !this.tipSubmitted;
    this.showTipRequest = !this.showTipRequest;

  }

  confirmTip(){
    this.grandTotal = (+this.tipAmount + this.subtotalWithTax).toFixed(2)
    this.tipConfirmed = !this.tipConfirmed;
    this.showTipAmount = !this.showTipAmount;
  }

  changeTip(){
    this.showTipAmount = !this.showTipAmount;
    this.tipSubmitted = !this.tipSubmitted;
    this.showTipRequest = !this.showTipRequest;
  }

  startOver(){
    this.subtotal = null;
    this.tipPercentage = null;
    this.showSubInput = !this.showSubInput;
    this.showTaxAdded = !this.showTaxAdded;
    this.tipConfirmed = !this.tipConfirmed;
  }
}
