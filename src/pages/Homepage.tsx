
import Hero from "../components/Hero"
import Homecards from "../components/Homecards"
import Joblisting from "../components/Joblisting"
import ViewAll from "../components/ViewAll"


const Homepage = () => {
  return (
    <>
    <Hero title={'Become a Dev'} description="Find the React Job that fits your skill set"/>
    <Homecards/>
    <Joblisting isHome={true}/>
    <ViewAll/>
    </>
      

  )
}

export default Homepage
