import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import "../App.css";
import * as CharBase from '../data/CharacterBaseStats.js';
import * as ClassGrowth from '../data/ClassGrowthRates.js';

const characterList = [];
const classList = [];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        paddingTop: 10,
        minWidth: 120,
    },
}));

const generateList = (list, data) => {
    var tempID = 0;
    for (var tempName in data.name) {
        list.push({
                id: tempID,
                name: tempName
        });
        tempID++;
    }
};

generateList(characterList, CharBase);
generateList(classList, ClassGrowth);

const Selector = props => {
    const classes = useStyles();

    const handleChange = event => {
            props.onUpdate(event.target.name, event.target.value);      
    }

    return (
        <form className={classes.root} autoComplete="off">
            <Grid container direction='row'>
                <FormControl className={classes.formControl}>
                    <InputLabel>Character</InputLabel>
                    <Select
                        name="char-change"
                        value={props.character.unitName}
                        onChange={handleChange}
                    >
                        {
                            characterList.map((char) =>
                                <MenuItem key={char.id} value={char.name}>{char.name}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel>Class</InputLabel>
                    <Select
                        name="class-change"
                        value={props.character.className}
                        onChange={handleChange}
                    >
                        {
                            classList.map((clName) =>
                                <MenuItem key={clName.id} value={clName.name}>{clName.name}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </Grid>
        </form>
    );
};

export default Selector;