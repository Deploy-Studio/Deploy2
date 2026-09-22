import Capabilities from './Capabilities'
import Footer from './Footer'
import FractionalOperator from './Fractional-operator'
import Hero from './Hero'
import Metrics from './Metrics'
import Navbar from './Navbar'
import OperationalAlignment from './Operational-alignment'
import Partnership from './Partnership'
import Process from './Process'
import Ready from './Ready'
import usePageMotion from './usePageMotion'

export default function App() {
  usePageMotion()

  return (
    <>
      <Navbar />
      <Hero />
      <FractionalOperator />
      <OperationalAlignment />
      <Metrics />
      <Capabilities />
      <Partnership />
      <Process />
      <Ready />
      <Footer />
    </>
  )
}
