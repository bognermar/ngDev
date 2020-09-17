import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Voucher } from '../model';
import { environment } from 'src/environments/environment';
import { lateVoucher } from '../late-voucher';

@Injectable({
  providedIn: 'root',
})
export class StatefulVoucherService {
  constructor(private httpClient: HttpClient) {
    this.initData();
    this.addLateVoucher();
  }

  private vouchersArray: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(
    this.vouchersArray
  );

  url = environment.apiUrl;

  private initData() {
    this.httpClient.get<Voucher[]>(`${this.url}`).subscribe((data) => {
      this.vouchersArray = data;
      this.vouchers.next(this.vouchersArray);
    });
  }

  addLateVoucher() {
    setTimeout(() => {
      // this.vouchersArray.push(lateVoucher as Voucher);
      // this.vouchers.next(this.vouchersArray);
      // ODER:
      this.insertVoucher(lateVoucher);
    }, 4000);
  }

  getAllVouchers(): Observable<Voucher[]> {
    return this.vouchers;
  }

  getVoucherById(id: number): Observable<Voucher> {
    return this.vouchers.pipe(map((arr) => arr.find((mi) => mi.ID == id)));
  }

  insertVoucher(v: Voucher): any {
    this.vouchersArray.push(v);
    this.vouchers.next(this.vouchersArray);

    // send to db
    /*this.httpClient.post(this.url, v).subscribe((v: any) => {
      this.vouchersArray.push(v);
      this.vouchers.next(this.vouchersArray);
    }); TODO */

    // refresh state
  }

  updateVoucher(v: Voucher): any {}

  deleteVoucher(id: number) {
    this.vouchersArray = this.vouchersArray.filter((v) => v.ID !== id);
    this.vouchers.next(this.vouchersArray);
  }
}
