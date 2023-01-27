import ContainerBlock from '@components/ContainerBlock'
import Hero from '@components/Hero'
import About from "@components/About";
import Services from "@components/Services";
import Portfolio from "@components/Portfolio";

export default function Home() {
  return (
    <>
      <ContainerBlock>
          <Hero />
          <About />
          <Services />
          <Portfolio />
      </ContainerBlock>
    </>
  )
}
