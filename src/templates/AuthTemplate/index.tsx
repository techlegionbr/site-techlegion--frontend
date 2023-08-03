import HorizontalLine from "@/components/HorizontalLine"
import { Layout } from "@/patterns/Layout"

import { MainSection } from "./sections"


const AuthTemplate = (): JSX.Element => {
  return (
    <>
      <Layout.Header
        navigation={false}
        supHeader={false}
      />
      <MainSection />
      <HorizontalLine />
      <Layout.Footer />
    </>
  )
}

export default AuthTemplate