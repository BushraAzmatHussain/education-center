import React, { useEffect, useState } from 'react';
import first from '/Web course/education-center/src/images/first.jpg'

import "./Home.css"
import Card from "../Card/Card"



const Home = () => {
  const [courses, setCourse] = useState([]); 
  const [fourCourse, setFourCourse] = useState([]); 
     useEffect(()=> {        
    fetch('./course.JSON')        
    .then(res=> res.json())       
    .then(data =>setCourse(data))      
  }, [])
  useEffect(() => {       
     
    if(courses) {               
      const four = courses.filter((course, index) => index < 4);
      setFourCourse(four);            
    } 
  } , [courses])


    return (
        <section className="container">
                  <div className="row p-5 slide-bg-info d-flex">
                      <div className="col-lg-5 pt-4 mt-4">
                      <h1>CSE course</h1>
                      <h1>Amount: $2000</h1>
                      <p>One of the most sought after courses amongst engineering students, Computer Science Engineering (CSE) is an academic programme which integrates the field of Computer Engineering and Computer Science. The programme, which emphasises the basics of computer programming and networking, comprises a plethora of topics.</p>

                        </div>
                      <div className="col-lg-5 w-50">
                        <img src={first} className=""alt=""/>
                      </div>
                  </div>
                  <div className="row gy-4 row-cols-lg-3">
                    {
                    fourCourse.map((course,index)=><Card key={index} course={course}></Card>)
                    }
                    </div>  
      </section>
    
    
    
    )
    
      
}
export default Home;