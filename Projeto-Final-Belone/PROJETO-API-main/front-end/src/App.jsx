
import { Outlet } from 'react-router-dom'
function App() {
 

return(
  <div className='App'>
    <div className="container">
      <Outlet />
    </div> 
  </div>
)

}

export default App

const style ={
  input:{
    width: '100px',
    height: '40px',
    fontSize: '20px'
  }
}
