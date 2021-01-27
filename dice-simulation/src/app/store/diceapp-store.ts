import { Injectable } from '@angular/core';
import { DiceDistributionResponse, DiceRoll, DiceRollResponse} from 'src/app/common/models';
import { Store } from './store';

class DiceRollState {
   numberOfDice = 1;
   numberOfFaces = 4;
   numberOfRolls = 1;
   numberOfDiceDist?:any;
   numberOfFacesDist?:any;
   errorMessage = "";
   successMessage = "";
   diceSummary =[] as DiceRollResponse[];
   diceDistribution =[] as DiceDistributionResponse[];
   displayedColumns = ["noOfDice","noOfDiceFaces","rolls","simulations"];
   displayedColumnsDist = ["rolledSum","relativeDistribution"];
}

@Injectable({ providedIn: 'root' })
export class DiceRollStore extends Store<DiceRollState> {
   constructor() {
      super(new DiceRollState());
   }

   getDiceRoll() {
      return this.state;
   }

   getDiceSummary() {
      return this.state.diceSummary;
   }

   getDiceDistribution() {
      return this.state.diceDistribution;
   }

   setErrorMessage(errorMessage:string){
      this.setState({ ...this.state, errorMessage: errorMessage,successMessage:"" });
   }

   setSuccessMessage(successMessage:string){
      this.setState({ ...this.state, successMessage: successMessage,errorMessage: "" });
   }

   setDiceRollSummary(diceSummary:DiceRollResponse[]){
      this.setState({ ...this.state, diceSummary: diceSummary});
   }

   setDiceDistribution(diceDistribution:DiceDistributionResponse[]){
      this.setState({ ...this.state, diceDistribution: diceDistribution});
   }
}
