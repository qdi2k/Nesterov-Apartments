import {Partners} from '@/widgets/partners'
import {Record} from '@/widgets/record'
import {ContactsMap} from '@/widgets/routeMap'

export function ContactsPage() {
  return (
    <div>
      <ContactsMap />
      <Partners />
      <Record />
    </div>
  )
}
