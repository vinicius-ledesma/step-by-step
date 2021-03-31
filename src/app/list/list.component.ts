import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  providers: [ListService],
})
export class ListComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' },
  ];

  constructor(private transportService: ListService) {}

  ngOnInit(): void {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number): boolean {
    return row.status !== 'delivered';
  }
}
