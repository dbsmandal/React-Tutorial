import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>This is Home page</h1>
      <h2>This is awesome home page</h2>
      <Link to="/about">go to the about page</Link>
    </div>
  )
}
