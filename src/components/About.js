import { Card, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../components/cv/CV_Emilio_Valverde_Quirós(esp).pdf"

const About = ({title, dark, id}) => {
const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <Typography variant="h3" className={classes.acerca}>
                {title}
            </Typography>
            <Card className={classes.card}>
                <CardContent className={classes.cardcontent}>
                    <TypeWriterEffect 
                        text="¡Hola!"
                        textStyle={{fontSize: "3.5rem", fontWeight: "700px", color: "#1F6E8C"}}
                        startDelay={100}
                        cursorColor="black"
                        typeSpeed={100}
                    />
                    <TypeWriterEffect
                        text="Mi nombre es Emilio Valverde Quirós"
                        textStyle={{fontSize: "3.5rem", fontWeight: "700px", color: "#1F6E8C"}}
                        startDelay={1000}
                        cursorColor="black"
                        typeSpeed={100}
                    />
                    <CardContent className={classes.texto}>
                        <TypeWriterEffect className={classes.texto}
                            text="Y soy un Desarrollador de Software Full-Stack con experiencia
                            en tecnologías como: "
                            textStyle={{fontSize: "1.5rem", fontWeight: "500px", marginTop: "30px"}}
                            startDelay={5000}
                            cursorColor="black"
                            typeSpeed={50}
                        />
                        <TypeWriterEffect className={classes.texto}
                            text="- React JS"
                            textStyle={{fontSize: "1.5rem", fontWeight: "500px", marginTop: "30px"}}
                            startDelay={10000}
                            cursorColor="black"
                            typeSpeed={50}
                        />
                        <TypeWriterEffect className={classes.texto}
                            text="- Bootstrap"
                            textStyle={{fontSize: "1.5rem", fontWeight: "500px", marginTop: "30px"}}
                            startDelay={10000}
                            cursorColor="black"
                            typeSpeed={50}
                        />
                        <TypeWriterEffect className={classes.texto}
                            text="- C#"
                            textStyle={{fontSize: "1.5rem", fontWeight: "500px", marginTop: "30px"}}
                            startDelay={10000}
                            cursorColor="black"
                            typeSpeed={50}
                        />
                    </CardContent>
                    
                </CardContent>
                <CardActions>
                    <button className={classes.pdfbutton}><a href={pdf} download>Descarga mi CV</a></button>
                </CardActions>
                
            </Card>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh", 
        [theme.breakpoints.down("xs")] : {
            minHeight: "120vh"
        },    
   },
   sectiondark: {
        background: "#333",
        color: "#fff",
   },
   sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",        
   },
   acerca: {
        paddingTop: theme.spacing(5),
   },
   card: {
        height: "80vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
        [theme.breakpoints.down("xs")] : {
            height: "90vh"
        }, 
   },
   cardcontent: {
        marginTop: theme.spacing(2),   
   },
   pdfbutton: {
        position: "absolute",
        bottom: "5rem",
        right: "4rem",
        [theme.breakpoints.down("sm")] : {
            bottom: "1rem",
            right: "1rem"
        },
        backgroundColor: "#1F6E8C",
        padding: theme.spacing(3),
        borderRadius: "2em",
        "&:hover": {
            backgroundColor: "#2E8A99",
        },
        "& a": {
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900
        },
   },
   texto: {
        [theme.breakpoints.down("xs")] : {
            display: "none"
        },
   }
 }))

export default About