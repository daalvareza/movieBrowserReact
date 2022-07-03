import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>
        <a href='https://www.linkedin.com/in/diego-alonso-%C3%A1lvarez-arcila-a023121b1/' target='_blank'>
          <img className='logo-linkedin' src='linkedin.png'></img>
        </a>
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
