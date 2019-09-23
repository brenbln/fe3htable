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
        paddingTop: '10px',
        paddingLeft: '2%'
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

const DropdownSelect = props => {
    const classes = props.classes,
        handleChange = props.handleChange,
        inputLabel = props.inputLabel,
        selectName = props.selectName,
        selectValue = props.selectValue,
        selectList = props.selectList;
    return (
        <FormControl className={classes.formControl}>
            <InputLabel>{inputLabel}</InputLabel>
            <Select
                name={selectName}
                value={selectValue}
                onChange={handleChange}
            >
                {
                    selectList.map((select) =>
                        <MenuItem key={select.id} value={select.name}>{select.name}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

const Selector = props => {
    const classes = useStyles();

    const handleChange = event => {
        props.onUpdate(event.target.name, event.target.value);
    }

    return (
        <form className={classes.root} autoComplete="off">
            <Grid container direction='column'>
                <DropdownSelect 
                    classes={classes}
                    handleChange={handleChange}
                    inputLabel={'Character'}
                    selectName={'char-change'}
                    selectValue={props.character.unitName}
                    selectList={characterList}
                />
                <DropdownSelect 
                    classes={classes}
                    handleChange={handleChange}
                    inputLabel={'Class'}
                    selectName={'class-change'}
                    selectValue={props.character.className}
                    selectList={classList}
                />
            </Grid>
        </form>
    );
};

export default Selector;