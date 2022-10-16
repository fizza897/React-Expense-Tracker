import React from 'react'

export default function TransationHistory() {
  return (
    <div>
        <h3>TransactionHistory</h3>
        <ul className='list'>
            <li  className='plus'>
                 Salary
                 <span>+$1000</span>
                 <button className='delete-btn'>X</button>
            </li>
            <li className='minus'>
                 Shopping
                 <span>-$100</span>
                 <button className='delete-btn'>X</button>
            </li>
        </ul>
        
        
        </div>
  )
}
