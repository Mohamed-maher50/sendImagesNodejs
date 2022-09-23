import React, { useEffect ,useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/Add'
const App = () => {
  const [image,setImage] = useState([])

    useEffect(() => {
      const getIamge = async() => 
    {
      const respons = await fetch('http://localhost:5050/api/imageUpdata')
      setImage(await respons.json())
    }
    // getIamge()
    },[])
    const HandlerImage =image.map((item) => {
      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(item.img.data.data))
        );
      return(
        <div key={item._id}>
          <h1>Image</h1>
          <img src={`data:image/png;base64,${base64String}`} alt='dad' width="300"/>      
          </div>
      )
    })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
