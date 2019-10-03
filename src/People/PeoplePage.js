import React, {Component} from 'react'
import PeopleList from './PeopleList';
import FrequencyList from './FrequencyList';
import logo from '../images/salesloftLogo.png'

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
        <img src={logo} alt="SalesLoft Logo" width="200" height="100"/>
        <h1>Welcome to the People-Email-Unique-Character-Counter-inator</h1>

        {this.state.uniqueToggle ?
          <>
            <button className="uniquify" onClick={this.uniquinator}>Toggle Uniquify</button>
            <FrequencyList charCount={this.state.charCount}></FrequencyList> 
          </>
            :
          Array.isArray(this.state.people) && this.state.people.length ? 
            <>
              <button className="uniquify" onClick={this.uniquinator}>Toggle Uniquify</button>
              <PeopleList people={this.state.people}></PeopleList>
            </>
            :
            <div className="spinner"></div>
        }
      </div>
      )
    }

}

export default PeoplePage
