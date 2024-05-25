import React, { useState } from 'react'

const TodoList = () => {
  const [activity,setactivity] = useState("");
  const [listdata,setlistdata]=useState([]);
  function addActivity(){
      //  setlistdata([...listdata,activity])
      //  console.log(listdata);
  setlistdata((listdata)=>{
    const updatedlist=[...listdata,activity]
    console.log(updatedlist)
    setactivity('')
    return updatedlist
  })
  
  }
  function removeActivity(i){
        const updatedlistdata = listdata.filter((elem,id)=>{
        return i!==id;
        })
        setlistdata(updatedlistdata)
  }
  return (
    
    <>
    <div className='container'>
      <div className='header'>
        TODO LIST
      </div>
      <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>
        setactivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className='list-heading'> Here is you list :{")"}</p>
        {listdata!=[] && listdata.map((data,i)=>{
          return(
            <>
            <p key={i}>
              <div className='listdata'>{data}</div>
              <div className='btn-position'><button onClick={()=>removeActivity(i)}>
                remove(-)</button></div>
            </p>
            </>
          )
        })}
    </div>
    </>
  )
}

export default TodoList