import React from 'react';

const PeopleList = (props) => {

  return (
    // TODO: Add Pagination
    <div className="people-list">
    {Array.isArray(props.people) && props.people.length ? 
      <ul>
       { props.people.map(person => {
         return(
         <li key={person.id}>
          <strong>Name: </strong>{person.display_name}
          <br />
          <strong>Job Title: </strong>{person.title}
          <br />
          <strong>Email: </strong>{person.email_address}
          </li>
            )
          })
        }
      </ul> :
      null
    }
  </div>
  )
}

export default PeopleList