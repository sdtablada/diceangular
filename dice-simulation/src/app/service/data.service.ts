import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiceRoll} from '../common/models';

@Injectable({
   providedIn: 'root'
})
export class DataService {
   url  = "localhost:8080";
   
   constructor(private http: HttpClient, ) {

   }

   rollDice(diceRoll:DiceRoll) {
    return this.http.post<any>('http://'+this.url+'/roll-dice', {
            "numberOfDice":diceRoll.numberOfDice,
            "numberOfFaces":diceRoll.numberOfFaces,
            "numberOfRolls":diceRoll.numberOfRolls 
        });
   }

   getRollSummary() { 
      return this.http.get<any>('http://'+this.url+'/get-roll-summary');
   }

   getDiceDistribution(diceRoll:DiceRoll) { 
      return this.http.get<any>('http://localhost:8080/get-roll-distribution?numberOfDice='
                                 +diceRoll.numberOfDiceDist+'&numberOfFaces='+diceRoll.numberOfFacesDist);
   }
}
