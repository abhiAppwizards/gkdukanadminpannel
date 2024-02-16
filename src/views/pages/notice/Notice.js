import React from 'react'
import Card from './Card'

function Notice() {
  return (
    <>
      <div className='d-flex gap-3'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='d-flex gap-3 mt-3'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default Notice
