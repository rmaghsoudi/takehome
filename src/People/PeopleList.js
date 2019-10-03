import React from 'react';

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
          <td>{props.people.indexOf(person) + 1}</td>
          <td>{person.display_name}</td>
          <td>{person.title}</td>
          <td>{person.email_address}</td>
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
