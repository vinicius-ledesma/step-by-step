import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProJsToAdvplService } from 'protheus-lib-core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private adv: ProJsToAdvplService) {}

  callWelcomeMessage(): Observable<string> {
    return this.adv.buildObservable<string>(
      ({ protheusResponse, subscriber }) => {
        subscriber.next(protheusResponse);
        subscriber.complete();
      },
      {
        autoDestruct: true,
        receiveId: 'setWelcomeMessage',
        sendInfo: {
          type: 'getWelcomeMessage',
        },
      }
    );
  }

  askToBeCalled(): boolean {
    return this.adv.jsToAdvpl('callMe', 'someValue');
  }

  justCall(): boolean {
    return this.adv.jsToAdvpl('doSomething', 'otherValue');
  }
}
