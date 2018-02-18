import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
  return (
    <div>
      <h1> Profile-Page</h1>
      <Link to="/profile/about-me">About Me</Link>
    </div>
  )
}
