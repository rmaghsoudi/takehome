import React, { useState, useEffect } from 'react';
import PeopleList from './PeopleList';

const PeoplePage = () => {
  const apiUrl = 'https://api.salesloft.com/v2/people.json'
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  // code to run on component mount
  useEffect(() => {
    fetch(proxyUrl + apiUrl, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        //TODO: Limit amount of data fetched
        setPeople(data.data)
      })
  })
  // Declare a new state variable to contain the data
  const [people, setPeople] = useState([]);
  return (
    <div>
      <h1>Welcome to the People-Email-Unique-Character-Counter-inator</h1>
      {/* if people is an array and isn't empty, render the list */}
      {Array.isArray(people) && people.length ? 
        <PeopleList people={people}></PeopleList> :
        <h3>No people here</h3>
    }
    </div>
  );
}
export default PeoplePage
// what I need to display for each user: name, email address, job title
// add button that displays the frequency count of all the unique chars in the e-mails sorted by frequency count DESC