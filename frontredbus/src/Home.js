import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Menu from "./Menu";
import { Carousel } from "react-bootstrap";
import { Card} from "react-bootstrap";

const Home=()=>{

    //setting size to background image
    const backSize={

        "height": '450px',
        "overflow": 'hidden',
        "background-size": 'cover',
        "width": '100%'
    }

    const sizeStyle={
        "height":'300px'
         }//for setting size to the slides
return(
        <>
        <Menu/>
        <img style={backSize} 
        src="https://st.redbus.in/Images/HomeIndia/nataknew.png"  
        alt="backgroundimage"/>
        {/*adding created text fields*/}
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12 shadow-sm p-3">
                {/*added text fields Menu.js*/}
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormControl variant=""></FormControl>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="From" variant="standard" />

                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField  id="input-with-sx" label="To" variant="standard" />
                        <input type="date" //for setting date
                        className="form-contro1 m-1" 
                        />
                        <Button variant="outlined" href="#outlined-buttons">Search</Button>
                    </Box>
                </Box>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12 shadow-sm p-3">
                <Card style={{ width: '50rem', height:'100px',}}>
                    <Card.Body>
                        <Card.Title>Website</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React Js</Card.Subtitle>
                                <Card.Text>
                                React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
                                </Card.Text>
                            {/*<Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>*/}
                    </Card.Body>
                </Card>
            </div>
        </div>
        {/*added cursel or we can use scroll bars scroll.js */}
        <div className="container mt-lg-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <center>
                            <Carousel>
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
                        </Carousel>
                      </center>
                </div>
            </div>
        </div>
    </>
    )
}


   
export default Home;