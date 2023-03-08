import React from 'react'

const signout = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('username');
  }
  return (
    <div>You have successfully logged out</div>
  )
}

export default signout