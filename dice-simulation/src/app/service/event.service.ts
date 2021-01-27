import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { Events } from '../common/constants';

interface IEvent {
   eventName: string,
   params: any
}

@Injectable({
   providedIn: 'root'
})
export class EventService {
   private readonly events$ = new Subject<any>();

   constructor() { }

   on(eventName: string, callback: Function) {
      this.events$.pipe(
         filter((e: IEvent) => e.eventName === eventName),
         map((e: IEvent) => e.params)
      ).subscribe((params: any) => {
         callback(params);
      });
   }

   emit(eventName: Events, params: any = {}) {
      this.events$.next({
         eventName: eventName,
         params: params
      } as IEvent);
   }
}
