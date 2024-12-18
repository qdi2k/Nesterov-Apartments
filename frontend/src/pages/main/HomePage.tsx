import {Main} from '@/widgets/main/Main'
import {Architecture} from '@/widgets/architecture/Architecture'
import {Advantages} from '@/widgets/advantages'
import {Location} from '@/widgets/location'

export function HomePage() {
  return (
    <div>
      <Main />
      <Architecture />
      <Advantages />
      <Location />
    </div>
  )
}
