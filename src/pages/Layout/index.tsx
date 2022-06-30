import React from 'react'
import Icon from '@/components/Icon'
export default function index() {
  return (
    <div>
      <Icon
        className='my-icon'
        type='iconbtn_home_sel'
        onClick={() => alert(123)}
      ></Icon>
    </div>
  )
}
