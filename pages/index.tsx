// import { SliceZone } from '@prismicio/react'

// import { createClient } from '../prismicio'
// import { components } from '../slices'

const Page = ({ page, navigation, settings }) => {
  // return <SliceZone slices={page.data.slices} components={components} />
  return <h1>Next</h1>
  // return <SliceZone slices={page.data.slices} />
}

export default Page

// export async function getStaticProps({ previewData }) {
//   const client = createClient({ previewData })

//   const page = await client.getSingle('homepage')

//   return {
//     props: {
//       page,
//     },
//   }
// }
