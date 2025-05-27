'use client'

import React, {useState} from 'react'
import styles from './FilterItems.module.css'

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <div
      className={`${styles.switchContainer} ${isOn ? styles.switchContainerOn : ''}`}
      onClick={toggleSwitch}
    >
      <div className={`${styles.ball} ${isOn ? styles.ballOn : ''}`} />
    </div>
  )
}
