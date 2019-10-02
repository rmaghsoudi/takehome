import React from 'react';

const FrequencyList = (props) => {

  return (
    <div className="frequency-list">
    {!!Object.keys(props.charCount).length ? 
      <ul>
       { Object.keys(props.charCount).sort(function(a, b) {
          return props.charCount[b] - props.charCount[a]})
          .map(function(k) {
          return (
            <li key={k}>{`${k}: ${props.charCount[k]}`}</li>
            )
})
        }
      </ul> :
      <h3>HI</h3>
    }
  </div>
  )
}

export default FrequencyList