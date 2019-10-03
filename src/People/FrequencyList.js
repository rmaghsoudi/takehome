import React from 'react';

const FrequencyList = (props) => {

  return (
    <div className="frequency-list">
    {/* conditional rendering to check if the object is empty */}
    {!!Object.keys(props.charCount).length ? 
      <table className="frequency-table">
        <tbody>
          <tr>
            <th>Character</th>
            <th>Unique Appearances</th>
          </tr>
       { Object.keys(props.charCount).sort(function(a, b) {
          return props.charCount[b] - props.charCount[a]})
          .map(function(k) {
          return (
            <tr key={k}>
            <td>{k}</td>
            <td>{props.charCount[k]}</td>
            </tr>
            )
})
        }
        </tbody>
      </table> :
      <h3>An error has occured</h3>
    }
  </div>
  )
}

export default FrequencyList