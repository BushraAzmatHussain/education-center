import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    console.log(props.course)
    const {img,Course,Amount} = props.course;
    
    return (
        <div>
            <div>
                <div className="card h-100" style={{height:'1000px'}} >
                        <div className="card-img">
                            <img style={{height:'200px'}} src={img ? img : ""}className="card-img-top img-fluid" alt=""/>
                        </div>
                        
                        <div className="card-body bg-dark">
                            <h3 className="fs-4 colors">{Course}</h3>
                            <h5 className="colors">Amount: {Amount}</h5>
                            <NavLink to="" className="btn btn-light text-dark">Continue Course
                            </NavLink>
                            </div>
                            </div>
                            </div>
                            </div>
            
    );
};

export default Card;