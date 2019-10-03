import React from 'react';
import '../Stylesheets/PeopleList.css'

const PeopleList = (props) => {

  return (
    // TODO: Add Pagination
    <div className="people-list">
    {Array.isArray(props.people) && props.people.length ? 
      <table className="people-table">
        <tbody>
          <tr>
            <th>Index</th>
            <th>Full Name</th>
            <th>Job Title</th>
            <th>Email Address</th>
          </tr>
       { props.people.map(person => {
         return(
         <tr key={person.id}>
          <th>{props.people.indexOf(person) + 1}</th>
          <th>{person.display_name}</th>
          <th>{person.title}</th>
          <th>{person.email_address}</th>
          </tr>
            )
          })
        }
        </tbody>
      </table> :
      null
    }
  </div>
  )
}

export default PeopleList
