import React, { useEffect, useState } from "react";
import './Cards.css';
import '../Images/img1.jpg';

export default function  Cards() {
    const [services, setServices] = useState([]);

    const fetchData = async (e) => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                setServices(data);
            } else {
                console.error("Error fetching data:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid ">
                {
                services.map((curElem, index) => {
                    const {price, description, provider, service}=curElem;
                    return(
                    <div key={index} className="card">
                        <b><div className="content">
                    <div className="grid grid-two-cols">
                        <p>{provider}</p>
                        <p>{price}</p>
                    </div>
                    <div className="grid grid-two-cols">
                        <p>{service}</p>
                        <p>{description}</p>
                    </div>
                    <div className="card cardhover mt-2" style={{ width: "100%",height:"420px" }}>
                            <img src={img1} className="card-img-top" alt="..." height="150px"  />
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p className="codeevent">Coding Event</p>
                                    <p className="codetime">Starts in 19 hours</p>
                                </div>
                                <h5 className="card-title eventhead">CodeBurn</h5>
                                <p className="card-text eventabout">GDSC,Dypcet Kolhapur in collabration with Coding Ninjas Studio,is thrilled to present the event</p>
                                <div className="d-flex">
                                    <div className="edate">
                                        <p className="eventdt">Event date</p>
                                        <p className="eventdate">April 14,2024</p>
                                    </div>
                                    <div className="efee">
                                        <p className="eventf">Entree fee</p>
                                        <p className="eventfee">Free</p>
                                    </div>
                                </div>
                                <a href="https://www.youtube.com/" className="btn btnregister">Register now</a>
                            </div>
                    </div>
                    </div>
                    </b>
                </div>
                
               
                
                );
                })}
            </div>
        </div>
    );
}
