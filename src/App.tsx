import React, { useMemo, useState } from 'react'
import { Typography, Slider } from 'antd'

import './App.css'
import { generate } from './core/Ill'

function App() {
  const DEFAULT_VALUE = 6
  const [maxLength, setMaxLength] = useState<number>(DEFAULT_VALUE)

  const sequence = useMemo(() => generate(maxLength), [maxLength])
  return (
    <div className='app'>
      <Typography.Title level={2}>1il-generator</Typography.Title>
      <Slider
        defaultValue={DEFAULT_VALUE}
        max={20}
        onChange={(val) => {
          setMaxLength(val)
        }}
      />
      <Typography.Title level={1}>{sequence}</Typography.Title>
    </div>
  )
}

export default App
