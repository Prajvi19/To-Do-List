"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  //maintask stores the data
  const [mainTask, setmainTask] = useState([])
//submithandler to not refresh the form on submission
  const submithandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])//because we don't want to lose the previous data
    settitle("")
    setdesc("")
  };
  const deleteHandler =(i) =>{
    let copytask= [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  //if no task is there,it displays this
  let renderTask=<h2>No Task Available</h2>
  //maintask behaves as an array and shows all the entered data
  if(mainTask.length >0){
    renderTask =mainTask.map((t,i) => {
      return(
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between w-2/3 '> 
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-semibold'>{t.desc}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)}}
          className='bg bg-green-600 text-white px-4 py-2 rounded font-bold'>Completed</button>
        <button
        onClick={()=>{
          deleteHandler(i)}}
        className='bg bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
        
      );
    });
  }
 

  return (
   
    <>
    <h1 className=" bg-black
    text-white p-5 text-5xl font-bold text-center"> My To Do List
     </h1>
    
     <form onSubmit={submithandler}> 
    
      <input 
      type="text" 
      className='text 2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder="Enter Title here"
      value={title}
      onChange={(e)=>
        {settitle(e.target.value)
      }
    }
      />
    
      <input
      type="text" 
      className="text 2xl border-zinc-800 border-4 m-8 px-4 py-2"
      placeholder="Enter Description here"
      value={desc}//value after the placeholder
      onChange={(e)=>{
        setdesc(e.target.value)//receives the value of description and stores so that react is aware of it
      }}
      />
      <button className=' bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
     </form>
     <hr />
     <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
     </div>
     
    </>
  )
}

export default page