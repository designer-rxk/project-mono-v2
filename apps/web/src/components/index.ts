'use client'

import { useQuery } from '@hooks'
import { type QueryResponseInitial } from '@sanity/react-loader/rsc'


type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<PagePayload | null>
}

export default function PagePreview(props: Props) {
  const { params, initial } = props
  // Using the `useQuery` hook to fetch the most current data based on the page slug
  const { data } = useQuery<'YOUR_PAGE_PAYLOAD_TYPE' | null>('<YOUR_GROQ_QUERY>', params, {
    initial,
  })

  return <Page data={data!} />
}