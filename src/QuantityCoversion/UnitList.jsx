import React, { Component } from 'react';

class UnitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultUnits: [
                {id:'1',name:'INCH'},
                {id:'2',name:'FEET'},
                {id:'3',name:'CM'},
                {id:'4',name:'YARD'}
            ]
        }
        console.log('asdfghjk',this.props.qty)
    }

    render() {

        let defaultunitList = this.state.defaultUnits.length > 0 
                && this.state.defaultUnits.map((item,i) => {
            return(
                <option key={i} value={item.name}>{item.name}</option>
                )    
        },this);

        let unitList = this.props.unitArray.length > 0 
                && this.props.unitArray.map((item,i) => {
            return(
                <option key={i} value={item.name}>{item.name}</option>
                )    
        },this);
        return (
            <div>
                 <div className="flex-container" style={{flexDirection:'row'}}>
                    <div className="flex-container" style={{flexDirection:'column',width:'370%',height:'50px'}}>
                    <input style={{height:'35px'}} type="text" placeholder="Enter value"/>
                    <select  style={{width:'100%',backgroundColor:'lavenderblush'}}> { this.props.qty === '' ? defaultunitList : unitList }</select>
                    </div>
                    <text style={{fontSize:'30px'}}> = </text>
                    <div className="flex-container" style={{flexDirection:'column',width:'370%',height:'50px'}}>
                    <input style={{height:'35px'}} type="text" placeholder='Converted value'/>
                    <select style={{width:'100%',backgroundColor:'lavenderblush'}}>{ this.props.qty === '' ? defaultunitList : unitList }</select>
                    </div>
                </div>
            </div>          
        );
    }
}

export default UnitList;