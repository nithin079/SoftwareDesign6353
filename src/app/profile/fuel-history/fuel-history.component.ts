import { Component, OnInit } from '@angular/core';
import { FuelQuote } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-fuel-history',
  templateUrl: './fuel-history.component.html',
  styleUrls: ['./fuel-history.component.less']
})
export class FuelHistoryComponent implements OnInit {
  products2: FuelQuote[];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getFuelQuote().then(data => this.products2 = data);
  }

}
