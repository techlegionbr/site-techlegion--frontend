

import Head from "next/head"

interface HeadProps {
  title?: string,
  description?: string,
  robots?: string[]
}

const HeadTemplate = ({ title, description, robots }: HeadProps): JSX.Element => {

  return (
    <Head>
      {title && (
        <>
          <meta property="og:title" content={title} />
          <title>{title}</title>
        </>
      )}
      {description && <meta name="description" content={description} />}
      {robots && <meta name="robots" content={robots.join(", ")} />}
    </Head>
  )
}

export default HeadTemplate