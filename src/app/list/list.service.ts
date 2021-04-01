import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

@Injectable()
export class ListService {
  constructor(private http: HttpClient) {}

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', label: 'Código' },
      { property: 'storeId', label: 'Loja' },
      { property: 'name', label: 'Nome' },
      { property: 'type', label: 'Tipo' },
      { property: 'entityType', label: 'Fisica/Juridica' },
      { property: 'registerSituation', label: 'Situação' },
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('/api/crm/v1/customerVendor');
  }
}
