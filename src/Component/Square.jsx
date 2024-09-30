import React from 'react'

function Square(props) {
  
  return (
    <div className='box' onClick={props.onClick}>
        <p className="pra">
            {props.value}

        </p>
        </div>
  )
}

export default Square