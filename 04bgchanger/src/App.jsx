import { useState } from "react"


function App() {
const [color, setColor] = useState("olive")
  return (
    <>
      
    <div className="w-full h-screen" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-content-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-content-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" style={{justifyContent: "center"}}>
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Rad</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}}>Gray</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full border border-gray-200 text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => setColor("#3b5998")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[#3b5998]">Facebook</button>
        </div>
      </div>
      
    </>
  )
}

export default App
