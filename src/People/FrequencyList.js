import React from 'react';

const FrequencyList = (props) => {

  return (
    <div className="frequency-list">
    {console.log(!!Object.keys(props.charCount).length)}
    {!!Object.keys(props.charCount).length ? 
      <ul>
       { Object.keys(props.charCount).sort(function(a, b) {
          return props.charCount[b] - props.charCount[a]})
          .map(function(k) {
          return (
            <li>{`${k}: ${props.charCount[k]}`}</li>
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