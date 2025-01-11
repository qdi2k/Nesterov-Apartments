'use client'

import {MainTitle} from '@/shared/ui'
import {Record} from '@/widgets/record'
import {SelectSection} from '@/widgets/select-section'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {useState} from 'react'
import {SelectContent} from '@/widgets/select-content'

export function ApartmentsPage() {
  const [activeSelect, setActiveSelect] = useState(1)
  return (
    <div className={themeStyles.container}>
      <MainTitle>Квартиры</MainTitle>
      <SelectSection
        activeSelect={activeSelect}
        changeSelect={setActiveSelect}
      />
      <SelectContent activeSelect={activeSelect} />
      <Record />
    </div>
  )
}
