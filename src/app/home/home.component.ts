import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  welcomeMessage: string;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.welcomeMessage = 'Carregando...';
    this.homeService
      .callWelcomeMessage()
      // tslint:disable-next-line: deprecation
      .subscribe((msg) => (this.welcomeMessage = msg));
  }

  advplLog(): void {
    this.homeService.justCall();
  }

  askLog(): void {
    this.homeService.askToBeCalled();
  }
}
