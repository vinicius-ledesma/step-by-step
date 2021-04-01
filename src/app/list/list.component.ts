import { Component, OnInit } from '@angular/core';
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
  isLoading: boolean;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.columns = this.listService.getColumns();
    // tslint:disable-next-line: deprecation
    this.listService.getItems().subscribe(
      (res) => {
        this.items = res.items;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }
}
