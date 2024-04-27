import React from 'react'
import Cards from '../Component/Cards'
import './Home.css';
function Home() {
  return (
    <div className='comcontainer1'>
       
    <header>
 <center><h1>Wlcome to DYPCET's College Clubs</h1></center>
 <div className='com1'>
   <center><h2 class='headding'>Explore,  Engage,  Excel</h2>
   <p class='hedinfo'> Uncover exciting opportunities, connect with like-minded peers, and enhance your college experience with diverse activities</p></center>
    </div>
 </header>
 <Cards></Cards>
     
 </div>
   
  )
}

export default Home