import React from 'react'

export default function AppTest() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: 'black', fontSize: '24px' }}>Portfolio Test</h1>
      <p style={{ color: 'black' }}>If you can see this, React is working!</p>
      <div style={{ backgroundColor: 'white', padding: '10px', margin: '10px 0', border: '1px solid #ccc' }}>
        <p>Current time: {new Date().toISOString()}</p>
      </div>
    </div>
  )
}