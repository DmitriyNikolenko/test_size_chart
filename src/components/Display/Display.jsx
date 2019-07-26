import React from 'react'

const Display = ({ condition, children }) => (condition ? children : null)

export default Display
