import React, {Component} from 'react'
import PeopleList from './PeopleList';
import FrequencyList from './FrequencyList';

class PeoplePage extends Component {

  apiUrl = 'https://api.salesloft.com/v2/people.json'
  // using a proxy due to cors issues
  proxyUrl = 'https://cors-anywhere.herokuapp.com/'

  state = {
    people: [],
    charCount: {},
    uniqueToggle: false
  }

  componentDidMount() {
    fetch(this.proxyUrl + this.apiUrl, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        this.setState({people: data.data})
      })
    }
    
    uniquinator = (e) => {
      // displays the frequency count of all the unique chars in the e-mails sorted by frequency count DESC
      const count = {}
      this.state.people.map(person => {
       const charArr = person.email_address.split('')
      // creating an array with UNIQUE chars for each email
       const uniqCharArr = [...new Set(charArr)]
       // keeping a count of each char by building an object as it iterates
       uniqCharArr.map(letter => {
          if (count[letter]) {
            count[letter] ++
          } else {
            count[letter] = 1
          }
        })
      })
      this.setState({charCount: count, uniqueToggle: !this.state.uniqueToggle})
    }
  
    render() {
      return (
        <div>
        <h1>Welcome to the People-Email-Unique-Character-Counter-inator</h1>
        {/* if people is an array and isn't empty, render the list */}
        {Array.isArray(this.state.people) && this.state.people.length ? 
          <>
          <button id="uniquify" onClick={this.uniquinator}>Toggle Uniquify</button>
          <PeopleList people={this.state.people}></PeopleList>
          </> :
          <div className="spinner"></div>
        }
        {this.state.uniqueToggle ?  <FrequencyList charCount={this.state.charCount}></FrequencyList> : null}
      </div>
      )
    }

}

export default PeoplePage
