import { Injectable } from '@angular/core';
import { Store } from './store';

class GlobalState {
   isBusy = false;
}

@Injectable({ providedIn: 'root' })
export class GlobalStore extends Store<GlobalState> {
   constructor() {
      super(new GlobalState());
   }

   setBusy(isBusy: boolean) {
      this.setState({ ...this.state, isBusy: isBusy });
   }
}
