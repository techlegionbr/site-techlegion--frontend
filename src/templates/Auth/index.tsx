import HorizontalLine from "@/components/HorizontalLine"
import Footer from "@/patterns/layout/Footer"
import Header from "@/patterns/layout/Header"

import { MainSection } from "./sections"


const Auth = (): JSX.Element => {
  return (
    <>
      <Header
        navigation={false}
        supHeader={false}
      />
      <MainSection />
      <HorizontalLine />
      <Footer />
    </>
  )
}

export default Auth