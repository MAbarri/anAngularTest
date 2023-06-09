import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.css']
})
export class CashRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  price: number = 0;
  prices: number[] = [];
  sum: number = 0;
  amountPaid: number = 0;
  tens: number = 0;
  fives: number = 0;
  ones: number = 0;

  addItem(price: number) {
    this.prices.push(price);
    this.sum += price;
  }

  pay(amount: number) {
    this.amountPaid = amount;
    let change = this.amountPaid - this.sum;

    this.tens = Math.floor(change / 10);
    change = change % 10;

    this.fives = Math.floor(change / 5);
    change = change % 5;

    this.ones = Math.floor(change);
  }

}
