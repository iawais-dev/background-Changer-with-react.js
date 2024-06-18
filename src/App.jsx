import { useState } from "react"

function App() {

  const [color,setColor] = useState('black')
  const[barcolor, setBarcolor] = useState('white')
  
  let handleclick = (newcolor)=>{
      if(newcolor === "white"){
        setColor('white')
    setBarcolor('black')
  }
  }
  let handleclicks = (color)=>{
if(color !== "white"){
  setColor(color)
  setBarcolor("white")
}
  }


  

  return (
    <div className="w-screen h-screen" style={{backgroundColor : color}}>
      <div className="p-4" style={{backgroundColor:barcolor}}>
     <div className="flex justify-center gap-8">
      <button onClick={()=>handleclicks("red")} className="bg-red-600 p-2 rounded-3xl text-white font-bold w-24 shadow-xl">Red</button>
      <button onClick={()=>handleclicks("green")} className="bg-green-600 p-2 rounded-3xl text-white font-bold w-24 shadow-xl">Green</button>
      <button onClick={()=>handleclicks("blue")} className="bg-blue-600 p-2 rounded-3xl text-white font-bold w-24 shadow-xl">Blue</button>
      <button onClick={()=>handleclick('white')} className="bg-white p-2 rounded-3xl text-black font-bold w-24 shadow-xl">White</button>
      <button onClick={()=>handleclicks("yellow")} className="bg-yellow-300 p-2 rounded-3xl text-white font-bold w-24 shadow-xl">Yellow</button>
      <button onClick={()=>handleclicks("pink")} className="bg-pink-600 p-2 rounded-3xl text-white font-bold w-24 shadow-xl">Pink</button>


     </div>
      </div>
      
      
          </div>
  )
}

export default App
