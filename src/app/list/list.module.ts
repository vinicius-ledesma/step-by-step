import { PoModule, PoTableModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, PoModule, PoTableModule],
  exports: [ListComponent],
})
export class ListModule {}
