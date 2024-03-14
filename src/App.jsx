

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks,setBookMarks]= useState([]);
  const [readingTime,setReadingTime]=useState(0);


  const handleAddToBookMarks =(blog)=>{
   const newBookMarks =[...bookMarks,blog]
   setBookMarks(newBookMarks)
  }
  const handleMarkAsRead = (id,time)=>{
    setReadingTime(readingTime+time)

    const remaingBookMark = bookMarks.filter(bookmark => bookmark.id !== id)
    setBookMarks(remaingBookMark)
  }
 

  return (
    <>
     <Header></Header>
     <div className='md:flex justify-between'>
     <Blogs handleAddToBookMarks={handleAddToBookMarks}
     handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookMarks}
     readingTime={readingTime}></Bookmarks>
     </div>
   
    
    </>
  )
}

export default App
