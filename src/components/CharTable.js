import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import * as CharBase from '../data/CharacterBaseStats';

const CharTable = props => {
    const unitBaseStats = CharBase.name[props.character.unitName];
    return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Stat</TableCell>
                        <TableCell>Base</TableCell>
                        {/* <TableCell>Value</TableCell> */}
                        <TableCell>Personal</TableCell>
                        <TableCell>Class</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {                 
                        Object.keys(props.character.unitStat).map(stat => (
                            <TableRow key={stat}>
                                <TableCell>{stat}</TableCell>
                                <TableCell>{unitBaseStats[stat]}</TableCell>
                                {/* <TableCell>{props.character.unitStat[stat]}</TableCell> */}
                                <TableCell>{props.character.unitGrowthRate[stat]}</TableCell>
                                <TableCell>{props.character.classGrowthRate[stat]}</TableCell>
                                <TableCell>{props.character.totalGrowthRate[stat]}</TableCell>
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
    );
};

export default CharTable;