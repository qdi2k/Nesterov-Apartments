import {Calculator} from '@/widgets/calculator'
import {Partners} from '@/widgets/partners'
import {Record} from '@/widgets/record'
import {SalesInfo} from '@/widgets/sales-info'

export default function Rules() {
  return (
    <div>
      <SalesInfo />
      <Partners />
      <Calculator />
      <Record />
    </div>
  )
}
