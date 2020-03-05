import * as React from 'react'
import { memo } from 'react'

import * as hippo from '@resources/images/hippo.png'
import { Props } from './typings'

export const Button = memo((props: Props) => {
  const { label, onClick } = props

  // console.log('REACT RENDER', label)

  return (
    <div>
      <button onClick={onClick}>
        <img src={hippo} alt="hippo" style={{ width: 30 }} /> {label}
      </button>
    </div>
  )
})
