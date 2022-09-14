import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
        <Component {...pageProps} />
        </PrismicProvider>
  )
}

// export default function App({ Component, pageProps }) {
//   return (
//     <PrismicProvider
//       linkResolver={linkResolver}
//       internalLinkComponent={({ href, ...props }) => (
//         <Link href={href}>
//           <a {...props} />
//         </Link>
//       )}
//     >
//       <PrismicPreview repositoryName={repositoryName}>
//         <Component {...pageProps} />
//       </PrismicPreview>
//     </PrismicProvider>
//   );
// }