import React from "react";
import "./index.css";
import Plan from "./Plan";
class App extends React.Component{
    state={
        items:[],
        text:""
    }
    handlechange=e=>{
        this.setState({text:e.target.value})
    }
    handleclick=e=>{
        if(this.state.text !==""){
            const items=[...this.state.items,this.state.text];
            this.setState({items:items,text:""})
        }
    }
    handledelete=id=>{
        const Olditems=[...this.state.items];
        const items=Olditems.filter((element,i)=>{
            return i !== id
        })
        this.setState({items:items})
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 mx-auto shadow p-5">
                        <h1 className="text-center">Todo Application</h1>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <input type="text" placeholder="Write something here" className="form-control" value={this.state.text} 
                            onChange={this.handlechange}/>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-outline-dark"
                             onClick={this.handleclick}>Post</button>
                        </div>
                    </div>
                    <ul className="row list-unstyled">
                        {/* <li>Going  to Gym</li>
                        <li>Bring Vegetables</li>
                        <li>etcc...........</li> */}
                        {
                            // console.log("this.state.items")
                            this.state.items.map((value,i)=>{
                                return <Plan value={value} key={i} id={i} sendFun={this.handledelete}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default App;