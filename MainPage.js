import React, {Component} from "react";
import Character from './Character';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: ""
        };

        this.state.character = new Character(); 
    }
}