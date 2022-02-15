import react,{Component} from "react";
class ServiceTest extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['a','b']
        }
    }
    render(){
        return(
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.AddList.bind(this)}>add service</button>
                </div>
                <ul>
                    {
                     this.state.list.map((item,index)=>{
                         return <li key={index}>{item}</li>
                     })   
                    }
                    
          
                </ul>
            </div>

        )
    }
    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })

    }
    AddList(e){
        this.setState(
            {       
                list:[...this.state.list,this.state.inputValue],
                inputValue:''
            }
        )
    }

}
export default ServiceTest