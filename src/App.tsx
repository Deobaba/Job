import { RouterProvider} from 'react-router-dom'
import { router }from './router'


// const router = createBrowserRouter(
//     createRoutesFromElements(
//     <Route path ='/' element={<Mainlayout/>}>
//     <Route index element={<Homepage/>}/>
//     <Route path='/jobs' element={<Jobspage/>}/>
//     <Route path='*' element={<Notfound/>}/>
//     </Route>
//     )
// )
 
function App() {
return <RouterProvider router={router}/>
}

export default App
