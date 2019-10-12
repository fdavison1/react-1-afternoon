import React, {Component} from 'react'


class Sum extends Component {
 constructor(props){
     super(props)
 }

 render(){
     return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine"/>
            <input className="inputLine"/>
            <button className="confirmationButton"></button>
            <span className="resultsBox"></span>
        </div>
     )
 }
}

export default Sum