import react,{Component} from "react";
import './index.css'
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
            <div>{/* 注释 */}
                <div>
                    <label htmlFor="jh"> add service</label>
                    <input id="jh" className='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.AddList.bind(this)}>add service</button>
                </div>
                <ul>
                    {
                     this.state.list.map((item,index)=>{
                         return (
                                <li 
                                key={index}
                                onClick={this.deleteItem.bind(this,index)}
                                dangerouslySetInnerHTML={{__html:item}}
                                >
                                    
                                </li>
                            )
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
    deleteItem(index){
        let list= this.state.list
        list.splice(index,1)
        this.setState(
            {
                list : list   
            }
        )

    }

}
export default ServiceTest