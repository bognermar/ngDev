import { Component, OnInit } from '@angular/core';
import { StatefulVoucherService } from '../stateful-voucher.service';
import { Voucher } from '../../model';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss'],
})
export class SumComponent implements OnInit {
  constructor(private vs: StatefulVoucherService) {}

  sum = 0;

  ngOnInit(): void {
    console.log('init sum app');
    this.vs.getAllVouchers().subscribe((vouchers: Voucher[]) => {
      this.sum = 0;
      vouchers.forEach((v) => (this.sum += v.Amount));
    });
  }
}
