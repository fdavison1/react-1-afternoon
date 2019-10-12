import React, {Component} from 'react'


class Sum extends Component {
 constructor(props){
     super(props)

     this.state = {
         num1: 0, 
         num2: 0, 
         sum: null
     }
 }

 handleChange1(val){
     this.setState({number1: parseInt(val)})
 }

 handleChange2(val){
     this.setState({number2: parseInt(val)})
 }

 sumNums(num1, num2){
     this.setState({sum: num1 + num2})
 }

 render(){
     return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e) => this.handleChange1(e.target.value)}/>
            <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value)}/>
            <button className="confirmationButton" onClick={ ()=> this.sumNums(this.state.number1, this.state.number2)}>Add Numbers!</button>
            <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
     )
 }
}

export default Sum