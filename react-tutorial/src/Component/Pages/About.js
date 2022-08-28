import React from 'react';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <h2>This is awesome About  page</h2>
      <Link to="/">go to the Home page</Link>
    </div>
  )
};
