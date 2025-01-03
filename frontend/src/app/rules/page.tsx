'use client'

import {Calculator} from '@/widgets/calculator'
import {Partners} from '@/widgets/partners'
import {Record} from '@/widgets/record'
import {SalesInfo} from '@/widgets/sales-info'
import {useState} from 'react'

export default function Rules() {
  const [inputValue1, setInputValue1] = useState('3906000')
  const [inputValue2, setInputValue2] = useState('15')
  const [inputValue3, setInputValue3] = useState('945000')
  const [inputValue4, setInputValue4] = useState('9')
  return (
    <div>
      <SalesInfo />
      <Partners />
      <Calculator
        title='Калькулятор Рассрочки'
        maxValue1={20000000}
        minValue1={1000000}
        step1={1000}
        value1={inputValue1}
        valueMark1='₽'
        changeValue1={setInputValue1}
        maxValue2={40}
        minValue2={1}
        step2={1}
        value2={inputValue2}
        valueMark2='Лет'
        changeValue2={setInputValue2}
        maxValue3={4000000}
        minValue3={1000}
        step3={1000}
        value3={inputValue3}
        valueMark3='₽'
        changeValue3={setInputValue3}
        maxValue4={40}
        minValue4={1}
        step4={1}
        value4={inputValue4}
        valueMark4='%'
        changeValue4={setInputValue4}
      />
      <Record />
    </div>
  )
}
