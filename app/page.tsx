import Hero from "./Sections/Hero"
import About from './Sections/About'
import Characters from './Sections/Characters'
import Music from './Sections/Music'
import Gallery from './Sections/Gallery'
import Themes from './Sections/Themes'
import Trivia from './Sections/Trivia'
import WhyBuilt from './Sections/WhyBuilt'


export default function Home() {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #0B0C1C, #1E1B4B, #C084FC)'}}>
      <Hero />
      <About />
      <Characters />
      <Music />
      <Gallery />
      <Themes />
      <Trivia />
      <WhyBuilt />
 
    </div>
  )
}
