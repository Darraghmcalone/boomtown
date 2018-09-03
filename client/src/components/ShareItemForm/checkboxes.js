import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid'
import { FormControlLabel } from '@material-ui/core';

class Checkboxes extends React.Component {
    state = {
        householdItems: false,
        tools: false,
        electronics: false,
        physicalMedia: false,
        sportingGoods: false,
        musicalInstrum: false,
        recreationalEquip: false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <Grid
                container
                direction="column"
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.householdItems}
                            onChange={this.handleChange('householdItems')}
                            value="householdItems"
                        />
                    }
                    label="Household Items"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.tools}
                            onChange={this.handleChange('tools')}
                            value="tools"
                        />
                    }
                    label="Tools"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.electronics}
                            onChange={this.handleChange('electronics')}
                            value="electronics"
                        />
                    }
                    label="Electronics"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.physicalMedia}
                            onChange={this.handleChange('physicalMedia')}
                            value="physicalMedia"
                        />
                    }
                    label="Physical Media"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.electronics}
                            onChange={this.handleChange('electronics')}
                            value="electronics"
                        />
                    }
                    label="Electronics"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.sportingGoods}
                            onChange={this.handleChange('sportingGoods')}
                            value="sportingGoods"
                        />
                    }
                    label="Sporting Goods"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.musicalInstrum}
                            onChange={this.handleChange('musicalInstrum')}
                            value="musicalInstrum"
                        />
                    }
                    label="Musical Instruments"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.recreationalEquip}
                            onChange={this.handleChange('recreationalEquip')}
                            value="recreationalEquip"
                        />
                    }
                    label="Recreational Equipment"
                />
            </Grid>
        );
    }
}

export default Checkboxes;