import React from 'react'

export default function PrimaryButton({title, action}) {
  return (
    <button onClick={() => action()}>{title}</button>
  )
}
