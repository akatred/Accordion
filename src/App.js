import React, { useEffect, useState } from 'react'
import Title from './Components/Title'
import FileUploader from './Components/FileUploader'
import Info from './Components/Info'

const App=()=>{
  const [data, setData]= useState([])
  const [showindex, setShowindex] = useState(null)
  
  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata = async ()=>{
    const questions = await fetch("http://localhost:9000/questions")
    const res = await questions.json()
    setData(res)
  }

  return data.length===0 ? null :  (
    <>
      <div className=' justify-center flex py-5 '>
        <p className=' font-bold text-2xl md:text-3xl lg:text-4xl'> Accordian </p>
      </div>
       
       <div className=' flex w-full max-w-5xl mx-auto border border-gray-300 shadow-md rounded-lg p-6 mt-10'>
         
         <div className='w-1/2 border-r border-gray-300 p-6'>
          {data.map((ques, index)=><Title 
          key={ques.id} 
          data={ques} 
          index={index}
          setShowindex={setShowindex}/>)}
          </div>

          <div className='w-1/2 flex items-center justify-center p-4'>
          {showindex!==null?(
            <Info data={data[showindex]}/>
          ):(
            <p></p>
          )
          }
          </div>
      </div>
      </>
  )
}
export default App;
