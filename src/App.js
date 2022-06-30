import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async ()=>{
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getTours();
  }, [])
  
  const handleRemove = (id)=>{
    setTours(tours.filter((tour)=> tour.id !== id))
  }

  return (
    loading ? <main><Loading /></main>:<main><Tours tours = {tours} handleRemove={handleRemove} /></main>
  )
}

export default App
