import { useEffect } from "react"

import { useRouter } from "next/router"

const NavigationRedirect = ({ href }: { href: string }): JSX.Element => {
  const router = useRouter()

  useEffect(() => {
    void router.replace(href)
  }, [href, router])

  return <></>
}

export default NavigationRedirect