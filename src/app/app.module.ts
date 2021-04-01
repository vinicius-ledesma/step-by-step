import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PoModule } from '@po-ui/ng-components';
import { ProtheusLibCoreModule } from 'protheus-lib-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProtheusLibCoreModule,
    AppRoutingModule,
    PoModule,
    HomeModule,
    ListModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
