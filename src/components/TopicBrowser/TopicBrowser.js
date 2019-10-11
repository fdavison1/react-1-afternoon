import React, {Component} from 'react'
import EvenAndOdd from '/Users/fredbook/devmtn/week2/day5/react-1-afternoon/src/components/Topics/EvenAndOdd'
import FilterObject from '/Users/fredbook/devmtn/week2/day5/react-1-afternoon/src/components/Topics/FilterObject'
import FilterString from '/Users/fredbook/devmtn/week2/day5/react-1-afternoon/src/components/Topics/FilterString'
import Palindrome from '/Users/fredbook/devmtn/week2/day5/react-1-afternoon/src/components/Topics/Palindrome'
import Sum from '/Users/fredbook/devmtn/week2/day5/react-1-afternoon/src/components/Topics/Sum'

class TopicBrowser extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return(
            <div>
                <h1>React 1 Assignment</h1>
            <EvenAndOdd/>
            <FilterObject/> 
            <FilterString/>
            <Palindrome/>
            <Sum/>
            </div>

        )
    }
}

export default TopicBrowser;