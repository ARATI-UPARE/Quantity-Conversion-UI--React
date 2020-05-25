import React,{ Component } from 'react';
import UnitList from './UnitList'
import axios from 'axios';

class QuantityList extends Component{
    constructor(props){
        super(props);
        this.state = {
        selectedQty: '',    
        quantities:[],
        units:[],
        inputValue:'',
        inputUnit:'',
        outputUnit:'',
        outputValue:''
        }
    }
    
    componentDidMount(){
        axios.get(`http://localhost:8080/quantity`)
        .then(res =>{ console.log(res.data);
        this.setState({ quantities: res.data });
         })
       
     }

    handleChange = async(e) => {
        await this.setState({ selectedQty: e.target.value });
        console.log('Selected Quantity is:',this.state.selectedQty);
        
        axios.get(`http://localhost:8080/quantity/${this.state.selectedQty}`)
        .then(res =>{ console.log(res.data);
            this.setState({ units: res.data });
        })
    }

    handleChangeInputUnit = (e) =>{
        console.log("input unit is",e)
        this.setState({
            inputUnit: e
        })
    }

    handleChangeOutputUnit = (e) =>{
        console.log("output unit is",e)
        this.setState({
            outputUnit: e
        })
    }

    handleValueChange = async(e) => {
        console.log("value is :",e);
        await this.setState({
            inputValue: e
        })
        fetch("http://localhost:8080/quantity/conversion/" + this.state.outputUnit,{
            method:'POST',
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify({"value":this.state.inputValue,"quantityUnits":this.state.inputUnit})
        }).then(res =>  res.json())
          .then(json => {
            console.log("Output value is:",json)  
            this.setState({ 
                outputValue: json
             })
          })                 
        }

     render(){
        
        return(
            <div className="flex-container">
             <div>
                <select style={{width:'275%',height:'30px',backgroundColor:'lavenderblush'}} 
                defaultValue={this.state.selectedQty} onChange={this.handleChange}>
                {this.state.quantities.map(e => <option>{e}</option>)}
                </select>
             </div>
             <br/>
            <UnitList qty={this.state.selectedQty} unitArray={this.state.units} 
            input={this.handleChangeInputUnit} output={this.handleChangeOutputUnit} valChange={this.handleValueChange} op={this.state.outputValue}/>
            </div>
        );
    }
}    
export default QuantityList;