import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>
      <form className='contact' action='mailto:diegoalvarez9715@gmail.com'>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Last Name'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Contact Reason'/>
        <input type='submit' value='Send'/>
      </form>
    </div>
  )
}
