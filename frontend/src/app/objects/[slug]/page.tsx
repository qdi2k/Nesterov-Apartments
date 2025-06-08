import {ObjectPage} from '@/pages/object-page'

export default async function Object({params}) {
  const {slug} = await params
  return <ObjectPage title={slug} />
}
