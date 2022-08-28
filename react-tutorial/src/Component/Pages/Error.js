import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <h1>This URL is not Valid</h1>
      <Link to="/">Go to Home page</Link>
    </div>
  )
}
