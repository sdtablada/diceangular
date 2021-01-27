# DiceSimulation

DiceSimulation allows the user to execute a dice distribution simulation

## Dependency

DiceSimulation calls REST APIs from dice project available at 'https://github.com/sdtablada/dice.git'

## Usage

Import project and run `ng serve`. Navigate to `http://localhost:4200/`. 
The app will display a page where user can provide input to the simulation. 
When the user clicks 'Roll', app will call rest API '/roll-dice' and update the summary table.
User can also view the relative distribution for a specific dice number - dice side combination