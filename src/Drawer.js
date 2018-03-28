import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import DataIcon from 'material-ui/svg-icons/file/cloud';
import MapLayerIcon from 'material-ui/svg-icons/maps/layers';
import logo from './logo.png';

import * as Strings_en      from './Strings_en';

export default class DrawerUndocked extends React.Component{

    constructor(props){
        super(props);
        this.state = {open:false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render(){
        return(
            <div>
                <RaisedButton secondary={true} className=" b-center" label="Choose Data Set"
                              onClick={this.handleToggle} />
                <Drawer
                    docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onClick={this.handleClose}><img src={logo} alt={Strings_en.COUNCIL_FULL_NAME}/></MenuItem>
                    <Divider />
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={this.handleClose}>{Strings_en.DATA_NAME_ROADS}</MenuItem>
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={this.handleClose}>{Strings_en.DATA_NAME_FOOTPATH}</MenuItem>
                    <MenuItem leftIcon={<MapLayerIcon/>} onClick={this.handleClose}>{Strings_en.DATA_NAME_TREES}</MenuItem>
                    <MenuItem leftIcon={<DataIcon/>} onClick={this.handleClose}>{Strings_en.DATA_NAME_SOURCES}</MenuItem>
                </Drawer>
            </div>
        )
    }
}

