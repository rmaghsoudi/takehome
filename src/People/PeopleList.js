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
          <strong>Name: </strong>{`${person.first_name} ${person.last_name}`}
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
// PERSON DATA 
// account: {_href: "https://api.salesloft.com/v2/accounts/37127802", id: 37127802}
// bouncing: false
// city: "Kristofferborough"
// contact_restrictions: []
// country: "Netherlands Antilles"
// counts: {emails_sent: 0, emails_viewed: 0, emails_clicked: 0, emails_replied_to: 0, emails_bounced: 0, …}
// created_at: "2018-03-13T00:55:35.068148-04:00"
// crm_id: null
// crm_object_type: null
// crm_url: null
// custom_fields: {}
// display_name: "Alene Gleason"
// do_not_contact: false
// email_address: "madison@dubuque.name"
// first_name: "Alene"
// home_phone: null
// id: 101694752
// import: null
// job_seniority: null
// last_contacted_at: null
// last_contacted_by: null
// last_contacted_type: null
// last_name: "Gleason"
// last_replied_at: null
// linkedin_url: null
// locale: null
// mobile_phone: null
// owner: {_href: "https://api.salesloft.com/v2/users/46818", id: 46818}
// owner_crm_id: null
// person_company_industry: null
// person_company_name: null
// person_company_website: "http://dubuque.name"
// person_stage: null
// personal_email_address: null
// personal_website: null
// phone: "413.471.5175 x037"
// phone_extension: null
// secondary_email_address: null
// state: "Illinois"
// tags: []
// title: "Legacy Intranet Developer"
// twitter_handle: null
// updated_at: "2018-03-13T00:55:35.068148-04:00"
// work_city: null
// work_country: null
// work_state: null