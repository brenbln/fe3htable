import React, { Component } from 'react';
import Character from './Character';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CharTable from "./components/CharTable";
import Selector from "./components/Selector";

var CHAR_NAME = 'Protagonist';
var CLASS_NAME = "Noble"
var DEFAULT = new Character(CHAR_NAME, CLASS_NAME);

class App extends Component {
  state = {
    character: DEFAULT
  };

  increaseLevel = () => {
    this.state.character.calculateStat();
    this.setState(this.state.character);
  }

  onUpdate = (changeType, value) => {
    changeType === "char-change" ? this.state.character.updateChar(value) : this.state.character.updateGrowth(value);
    this.setState(this.state.character);
  }

  render() {
    return (
            <Grid container direction='row' justify='flex-start'>
              <Selector character={this.state.character} onUpdate={this.onUpdate.bind(this)}></Selector>
              <CharTable character={this.state.character} />
            {/* <Grid container direction='row'>
              <div className="level-button">
                <Button size="large" onClick={this.increaseLevel} variant='contained' color='primary'>Level</Button>
              </div>
            </Grid> */}
            </Grid>
        

    );
  }
}

export default App;
