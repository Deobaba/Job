import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Jobspage from './pages/Jobspage';
import Mainlayout from './layouts/Mainlayout';
import Jobpage from './pages/Jobpage';
import { JobLoader } from './loader';
import Notfound from './pages/Notfound';
import AddJoPage from './pages/AddJoPage';
import { Job } from './interface';


const addJob = async (newJob : Job)=>{
    const res = await fetch('http://localhost:8000/jobs',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    });
    return res.json();
}

const deleteJob = async (id:string)=>{
     await fetch(`http://localhost:8000/jobs/${id}`,{
        method: 'DELETE'
    });
    return 
}

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            { index: true, element: <Homepage /> },
            { path: 'jobs', element: <Jobspage /> },
            { path: 'add-job', element: <AddJoPage addToJob ={addJob}/> },
            { path: 'jobs/:id', element: <Jobpage deleteJob={deleteJob} />, loader: JobLoader },
            { path: '*', element: <Notfound /> }
        ]
    }
];

export const router = createBrowserRouter(routes);
