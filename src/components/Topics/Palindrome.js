import React, {Component} from 'react'


class Palindrome extends Component {
 constructor(props){
     super(props)
 }

 render(){
     return(
         <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine"/>
            <button className="confirmationButton"></button>
            <span className="resultsBox"></span>
         </div>
        
     )
 }
}

export default Palindrome