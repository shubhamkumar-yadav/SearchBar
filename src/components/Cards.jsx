import React from "react";
import Card from 'react-bootstrap/Card'
const Cards = ({ Fooddata }) => {
    return (<>
        {
            Fooddata.map((value,key) => {
                return (<>
                    <Card style={{ width: '22rem',border:"none" }} className="mb-4 hove">
                        <Card.Img variant="top" className="cd" src={value.imgdata} />
                        <div className="card_body">
                            <div className="upper_data d-flex justify-content-between align-items-center">
                                <h4 className="mt-2">{value.rname}</h4>
                                <span>{value.rating} &nbsp;★ </span>
                            </div>
                            <div className="lower_data d-flex justify-content-between align-items-center">
                                <h5 className="mt-2" style={{color:"grey"}}>{value.address}</h5>
                                <span style={{color:"grey"}}> {value.price} </span>
                            </div>
                            <div className="extra"></div>
                            <div className="last_data d-flex justify-content-between align-items-center">
                                <img className="limg" src={value.arrimg} alt="arrimg" />
                                <p style={{color:"grey"}}>{value.somedata}</p>
                                <img className="laimg" src={value.delimg} alt="delimg" />
                            </div>
                        </div>
                    </Card>
                </>)
            })
        }
    </>);
};
export { Cards };