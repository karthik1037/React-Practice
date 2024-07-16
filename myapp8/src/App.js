import React from 'react'

export default function App()
{
  const handleClick=()=>
  {
    console.log("This is a react handling program");
  }
  return (
    <>
      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

