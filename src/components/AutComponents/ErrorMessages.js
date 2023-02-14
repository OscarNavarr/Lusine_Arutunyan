import React from 'react'

const ErrorMessages = (props) => {
  return (
    <div>
       <p>Error: {props.error}</p>
    </div>
  )
}

export default ErrorMessages