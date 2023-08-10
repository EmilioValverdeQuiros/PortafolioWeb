import React from 'react'
import javaLogo from "../imgs/java.png"
import html5 from "../imgs/html-5.png"
import css3 from "../imgs/css-3.png"
import js from "../imgs/js.png"
import cplusplus from "../imgs/c++.png"
import mysql from "../imgs/mysql.png"
import { makeStyles } from '@material-ui/core'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from 'react-slick'

import "../carousel/technologies.css"

const Technologies = () => {
    const classes = useStyles();    

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
    
    

  return (
    
    <div className={classes.carousel}>
        <Slider {...settings}>
        <div className={classes.box}>
            <img src={javaLogo}/>
        </div>
        <div className={classes.box}>
            <img src={html5}/>
        </div>
        <div className={classes.box}>
            <img src={css3}/>
        </div>
        <div className={classes.box}>
            <img src={js}/>
        </div>
        <div className={classes.box}>
            <img src={cplusplus}/>
        </div>
        <div className={classes.box}>
            <img src={mysql}/>
        </div>
        </Slider>
        
    </div>
    
  )
}

const useStyles = makeStyles((theme) => ({
   carousel: {
      padding: theme.spacing(3),
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      color: "#fff",
      height: "50vh",
      width: "72vw",
      marginTop: theme.spacing(4),
   },
   box: {
        height: "500px",
        "& h3": {
            textAlign: "center"
        },
        "& img": {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            height: "50vh"
        },
        [theme.breakpoints.down("xs")] : {
            "& img": {
                width: "70vw"
                
            },
        },
   }
 }))

export default Technologies