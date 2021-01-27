import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { DiceRollStore} from './store/diceapp-store'
import { DiceDistributionResponse} from './common/models'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state$ = this.diceRollStore.state$.pipe();
  title = 'dice-simulation';
  
  constructor(private diceRollStore: DiceRollStore, private dataService:DataService) {
   
  }

  ngAfterViewInit() {
    this.dataService.getRollSummary().toPromise().then((response)=>{
      this.diceRollStore.setDiceRollSummary(response);
    });
  }

  sendEvent(action?:string) {
    var _this = this;
    if(!this.isValid()){
      return;
    }
    if(action=='get-distribution'){
      this.dataService.getDiceDistribution(_this.diceRollStore.getDiceRoll()).toPromise().then((response:[])=>{
        var items :DiceDistributionResponse[]=[];
        response.forEach(e=>{
          items.push({rolledSum:e[0],relativeDistribution:e[1]});
        });
        _this.diceRollStore.setDiceDistribution(items);
        
      });
    } else{
      _this.dataService.rollDice(_this.diceRollStore.getDiceRoll()).toPromise().then(()=>{
        _this.dataService.getRollSummary().toPromise().then((response)=>{
          _this.diceRollStore.setDiceRollSummary(response);
        });
       });
    }
    
  }

  private isValid():Boolean {
    if(this.diceRollStore.getDiceRoll().numberOfDice < 1){
      this.diceRollStore.setErrorMessage("Number of dice must be greater than or equal to 1.");
      return false;
    } else if(this.diceRollStore.getDiceRoll().numberOfFaces < 4){
      this.diceRollStore.setErrorMessage("Dice must have at least 4 sides.");
      return false;
    } else if(this.diceRollStore.getDiceRoll().numberOfRolls < 1){
      this.diceRollStore.setErrorMessage("Number of rolls must be greater than  or equal to 1.");
      return false;
    }
    return true;
  }

 }
