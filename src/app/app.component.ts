import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from 'protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private configService: ProAppConfigService) {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/' },
    { label: 'Lista', link: '/list' },
    { label: 'Sair', action: () => this.configService.callAppClose() },
  ];
  ngOnInit(): void {
    this.configService.loadAppConfig();
  }
}
