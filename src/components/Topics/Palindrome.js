import React, {Component} from 'react'


class Palindrome extends Component {
 constructor(props){
     super(props)

     this.state = {
         userInput: '', 
         palindrome: '', 
     }
 }

 handleChange(val){
    this.setState({userInput : val})
}

pali(userInput){
    let forwards = userInput
    let backwards = userInput
    backwards = backwards.split('')
    backwards = backwards.reverse()
    backwards = backwards.join('')

    if ( forwards === backwards ) {
        // console.log('hit')
      this.setState({ palindrome: 'true' })
    } else {
      this.setState({ palindrome: 'false' })
    }
    // console.log(this.setState)
  }



 render(){
     return(
         <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick = { () => this.pali(this.state.userInput)}>Check</button>
            <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
         </div>
        
     )
 }
}

export default Palindrome