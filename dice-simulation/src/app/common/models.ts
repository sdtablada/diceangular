export interface DiceRoll {
   numberOfDice?:any;
   numberOfFaces?:any;
   numberOfRolls?:any;
   numberOfDiceDist?:any;
   numberOfFacesDist?:any;
}

export interface DiceRollResponse {
   rolls?:any;
   simulations?:any;
   noOfDice?:any;
   noOfDiceFaces?:any;
}

export interface DiceDistributionResponse {
   rolledSum?:any;
   relativeDistribution?:any;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}