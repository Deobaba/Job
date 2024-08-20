// import jobs from '../jobs.json'
import { useEffect, useState } from 'react'
import Joblist, { Props } from './Joblist'
import Spinner from './Spinner'

const Joblisting = ({isHome = false}:{isHome?:boolean}) => {
const [jobs, setJobs]= useState([])
const [loading,setLoading]=useState(true)


useEffect(()=>{
  const fetchjob = async()=>{

    try{
      const res = await fetch('http://localhost:8000/jobs')
      const data = await res.json()
      setJobs(data)
    }catch(e){
      console.log('error fetching data',e)
    }
    finally{
      setLoading(false)
    }
    
  }

  fetchjob()
  
},[])

  const recentJobs = isHome? jobs.slice(0,3): jobs
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       {isHome? "Recent Jobs":"All Jobs"}
        </h2>
        
          {loading?( <Spinner loading={loading}/>):
          (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              { 
                recentJobs .map((job: Props) => (
                  <Joblist key={job.id} {...job} />
                ))
              }
            </div> 
          )
          }
       
      </div>
    </section>
  )
}

export default Joblisting
