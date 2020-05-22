import React,{ Component } from 'react';
import UnitList from './UnitList'

class QuantityList extends Component{
    constructor(props){
        super(props);
        this.state = {
        selectedQty: '',    
        quantities:[
            {id:'LEN',name:'LENGTH'},
            {id:'MAS',name:'MASS'},
            {id:'VOL',name:'VOLUME'},
            {id:'TEMP',name:'TEMPERATURE'}
        ],
        units:[]
        }
    }

    handleChange = async(e) => {
        await this.setState({ selectedQty: e.target.value });
        console.log('123334',this.state.selectedQty)
        if(this.state.selectedQty === "LENGTH"){
            this.setState({
                units:[
                    {id:'1',name:'INCH'},
                    {id:'2',name:'FEET'},
                    {id:'3',name:'CM'},
                    {id:'4',name:'YARD'}
                ]
            })
            }
        else if(this.state.selectedQty === "MASS"){
            this.setState({
                units:[
                    {id:'1',name:'GRAM'},
                    {id:'2',name:'KG'},
                    {id:'3',name:'TONNE'}
                ]
            })
        }
        else if(this.state.selectedQty === "VOLUME"){
            this.setState({
                units:[
                    {id:'1',name:'MILLILITRE'},
                    {id:'2',name:'LITRE'},
                    {id:'3',name:'GALLON'}
                ]
            });
        }  
        else{
            this.setState({
                units:[
                    {id:'1',name:'CELSIUS'},
                    {id:'2',name:'FAHRENHEIT'}
                ]
            });
        }    
    }
    
    render(){
        let quantityList = this.state.quantities.length > 0 
            && this.state.quantities.map((item,i) => {
        return(
            <option key={i} value={item.name}>{item.name}</option>
            )    
        },this);
        
        return(
            <div className="flex-container">
             <div>
                <select style={{width:'275%',height:'30px',backgroundColor:'lavenderblush'}} defaultValue={this.state.selectedQty} onChange={this.handleChange}>
                {quantityList}
                </select>
             </div>
             <br/>
            <UnitList qty={this.state.selectedQty} unitArray={this.state.units}/>
            </div>
        );
    }
}    
export default QuantityList;