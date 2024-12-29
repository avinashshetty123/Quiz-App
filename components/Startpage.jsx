import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Startpage() {
  return (
<div className="flex justify-center items-center h-96 text-3xl border bg-yellow-100">
  <div className="text-center mt-20">
    <h1 className="text-6xl m-4 p-5">Welcome To Quiz</h1>
    <Link to='/Quiz'>
    <button className="bg-red-100 p-2 rounded-lg">Click here to start</button>
    </Link>
  </div>
</div>

  )
}
