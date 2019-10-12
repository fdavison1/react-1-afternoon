import React, {Component} from 'react'


class FilterString extends Component {
 constructor(props){
     super(props)
 
    this.state = {
        names: ['James', 'Betty', 'Jessica', 'Donovan', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
        userInput: '',
        filteredNames: []
    }
    }
handleChange(val) {
    this.setState({userInput: val})
}

filterNames(userInput){
    let names = this.state.names
    // console.log(names)
    let filteredNames = [] 

    for (let i = 0; i < names.length; i++){
        if (names[i].includes(userInput)){
            filteredNames.push(names[i])
            console.log(names[i])
            console.log(userInput)
        }

    }
    // console.log(names)
    this.setState({filteredNames: filteredNames})
}

 render(){
     return(
         <div className="puzzleBox filterStringPB">
             <h4>Filter String</h4>
             <span className="puzzleText">Names: { JSON.stringify(this.state.names, null, 10)}</span>
             <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
             <button className="confirmationButton" onClick={ ()=> {this.filterNames(this.state.userInput) }}>Filter</button>
             <span className="resultsBox filterStringRB">Filtered Names (case-sensitive): { JSON.stringify(this.state.filteredNames, null, 10)}</span>
         </div>
     )
 }
}




export default FilterString