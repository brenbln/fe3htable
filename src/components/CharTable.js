import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    tableDisplay: {
        minWidth: '75%',
        paddingLeft: '5%'
    },
    positiveStat: {
        color: '#006400',
        fontWeight: 'bold'
    },
    negativeStat: {
        color: '#FF0000',
        fontWeight: 'bold'
    }
}));

const ColoredStat = props => {
    const statValue = props.data, baseValue = props.base, classes = props.classes;
    if (statValue > baseValue) return <TableCell className={classes.positiveStat}>{statValue}</TableCell> 
    else if (statValue < baseValue) return <TableCell className={classes.negativeStat}>{statValue}</TableCell>
    else return <TableCell>{statValue}</TableCell> 
}

const CharTable = props => {
    const classes = useStyles();
    return (
        <div className={classes.tableDisplay}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Stat</TableCell>
                        <TableCell>Base Stat</TableCell>
                        <TableCell>Unit Growth</TableCell>
                        <TableCell>Class Growth</TableCell>
                        <TableCell>Total Growth</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {                 
                        Object.keys(props.character.unitStat).map(stat =>                          
                            (
                            <TableRow key={stat}>
                                <TableCell>{stat}</TableCell>
                                <TableCell>{props.character.unitBaseStat[stat]}</TableCell>
                                <TableCell>{props.character.unitGrowthRate[stat]}</TableCell>
                                <ColoredStat data={props.character.classGrowthRate[stat]} base={0} classes={classes} />
                                <ColoredStat data={props.character.totalGrowthRate[stat]} base={props.character.unitGrowthRate[stat]} classes={classes} />
                            </TableRow>
                            )
                        )
                    }
                      {/* <TableRow>
                        <TableCell>Level</TableCell>
                        <TableCell>{props.character.level}</TableCell>
                    </TableRow>  */}
                </TableBody>
            </Table>
            </div>
    );
};

export default CharTable;