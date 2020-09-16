import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../vouchers/voucher.service';
import { Voucher } from '../vouchers/vouchers.model';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.scss'],
})
export class StructDirectivesComponent implements OnInit {
  constructor(private vs: VouchersService) {}

  // Variante 1 Person:
  // persons = [{ name: 'Heinz' }, { name: 'Brunhilde' }, { name: 'Susi' }];
  // selectedPerson: string = this.persons[0].name;

  // Variante 2 Person:
  persons = of([
    { name: 'Heinz' },
    { name: 'Brunhilde' },
    { name: 'Susi' },
  ]).pipe(delay(100));

  selectedPerson: string = this.persons[0]?.name;

  // Variante 1 Voucher:
  // vouchers: Voucher[];

  // Variante 2 Voucher:
  vouchers = this.vs.getVouchers();

  showDivOne = true;

  currentDirection: DirectionEnum = DirectionEnum.East;
  direction = DirectionEnum;

  ngOnInit() {
    // Variante 1 Voucher:
    /*this.vs.getVouchers().subscribe(
      (data) => {
        this.vouchers = data;
      },
      (err) => console.log('err: ', err)
    );*/
  }

  showVoucher(v: Voucher) {
    console.log(
      `navigating to voucher with text "${v.Text}" - covered later in more detail`
    );
  }

  switchSouth() {
    this.currentDirection = DirectionEnum.South;
  }
}

export enum DirectionEnum {
  East,
  West,
  North,
  South,
}
