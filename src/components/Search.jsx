import React from "react";
import './style.css';
import Form from 'react-bootstrap/Form'
import { Fooddata } from "./FoodData";
import { Cards } from "./Cards";
import { Set } from "./Set";
import { useState } from "react";
import { useEffect } from "react";
const Search = () => {
    // const [fdata,setFdata] = useState();
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
    const [copydata,setCopyData] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setCopyData(Fooddata);
        },3000)
    },[])
    const changeData = (e)=>{
        let getchangedata = e.toLowerCase();
        if(getchangedata === ""){
            setCopyData(Fooddata)
        }
        else{
            let storedata = copydata.filter((val,key)=>{
                return val.rname.toLowerCase().match(getchangedata); 
            })
            setCopyData(storedata);
        }
    }
    return (<>
        <div className="container d-flex justify-content-between align-items-center">
            <img src={zomatologo} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt="logo" />
            <h2 className="mt-3" style={{ color: "#1b1464", cursor: "pointer" }}>Search Filter App</h2>
        </div>
        <Form className="d-flex justify-content-center align-items-center mt-3">
            <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
                <Form.Control onChange={(e)=>changeData(e.target.value)} type="text" placeholder="Search Restaurants ..." />
            </Form.Group>
            <button className="btn text-light col-lg-1" style={{ backgroundColor: "#ed4c67" }}>Submit</button>
        </Form>
        <section className="iteam_section mt-4 container">
            <h2 className="px-4 mx-4" style={{ fontWeight: "lighter" }}>Restaurants in Ahmedabad Open now</h2>
            <div className="row mt-2 d-flex justify-content-around align-items-center">
                {
                    copydata && copydata.length ? <Cards Fooddata={copydata} />:<Set sdata={Fooddata}/>
                }
            </div>
        </section>
    </>)
};
export { Search };