import React from 'react'

export default function LinkButtons(props) {
    const { text, func } = props
  return (
        <button onClick={func} className={'custom-text-button:hover custom-text-button'}>
            <p>{text}</p>
        </button>
  )
}
