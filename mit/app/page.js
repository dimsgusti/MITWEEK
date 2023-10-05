import Timeline from './components/timeline'
import Timeline2 from './components/timeline2'
import Event from './components/event'
import JoinUs from './components/joinus'
import Aboutus from './components/aboutus'
import Footer from './components/footer'

export default function Home() {
  return (
    <main>
      {/* <Timeline /> */}
      <Timeline2 />
      <Event />
      <JoinUs />
      <Aboutus />
      <Footer />
    </main>
  )
}
