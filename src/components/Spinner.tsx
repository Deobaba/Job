import { ClipLoader } from "react-spinners"

const override = {
    display: 'block',
    margin: '100px auto',
    borderColor: 'red'
}
const Spinner = ({loading=false}:{loading:boolean}) => {
  return (
    
      <ClipLoader color="#3B82F6" loading={loading} cssOverride={override} size={150} />
  
  )
}

export default Spinner
