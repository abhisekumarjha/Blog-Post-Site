import React from 'react'

function Container({ children }) {
  return <div className='w-full h-full m-auto px-4 rounded'>
    {children}
  </div>;
}

export default Container