import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from "react-bootstrap";
import { Card} from "react-bootstrap";

export const Scroll=()=>{
    
    return(
        
        <>
        <center><Card style={{ width: '50rem', height:'100px',}}>
            <Card.Body>
                <Card.Title>Website</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">React Js</Card.Subtitle>
                    <Card.Text>
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
                    </Card.Text>
                {/*<Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>*/}
            </Card.Body>
        </Card></center>
        {/*added curesel or we can use scroll bars scroll.js */}
        <div className="container mt-lg-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <center><Carousel>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-70"
                            src="../pictures/red1.png"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-70"
                            src="../pictures/red2.jfif"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-70"
                            src="../pictures/red3.jfif"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-70"
                            src="../pictures/red4.jpg"
                            alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-70"
                            src="../pictures/red5.jpg"
                            alt="Fifth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-70"
                            src="../pictures/red6.jpg"
                            alt="Sixth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-70"
                            src="../pictures/red7.png"
                            alt="Seventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={sizeStyle}
                            className="d-block w-70"
                            src="../pictures/red8.jpg"
                            alt="Eighth slide"
                            />
                        </Carousel.Item>
                      </Carousel></center>
                </div>
            </div>
        </div>
    </>
    )
}

const sizeStyle={
    "height":'300px'
     }//for setting size to the slides