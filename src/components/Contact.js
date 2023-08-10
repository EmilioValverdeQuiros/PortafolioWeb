import { Paper, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_owrtxjq', 'template_wkxifgm', form.current, 'M5PYO8GIlsH-jn0j-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <Paper className={classes.root}>
                <div>
                    <Typography variant="h5">
                        Contáctame
                    </Typography>
                </div>
                <form className={classes.formulario} noValidate autoComplete="off" ref={form} onSubmit={sendEmail}>
                    <input label="Nombre" placeholder="Nombre Completo" name="user_name" />
                    <input type="email" label="Correo Electronico" placeholder="Correo Electrónico" name="user_email" />
                    <input label="Numero Telefonico" placeholder="Número Telefónico" name="user_phone" />
                    <input label="Asunto" placeholder="Asunto" name="subject" />
                    <textarea name="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button variant="contained" type="submit">Enviar</button>
                </form>
            </Paper>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
        
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "90vw", 
    },
    root: {
        marginTop: theme.spacing(4),
        background: "#1F6E8C",
        color: "#fff",
        fontSize: "1.2rem",
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(4),
        "& button": {
            backgroundColor: "#fff",
            color: "#1F6E8C",
            fontWeight: 900,
            fontSize: "1.2rem",
            marginTop: theme.spacing(4),
            borderRadius: "2em",
            cursor: "pointer",
        },
        "& button:hover" : {
            backgroundColor: "#2E8A99",
            color: "#fff"
        },
        "& h5": {
            textAlign: "center",
            marginBottom: theme.spacing(4)
        },
        "& input":{
            padding: "10px",
            fontWeight: 900,
        },
        "& input::placeholder":{
            color: "#1F6E8C"
        },
        "& label":{
            marginBottom: theme.spacing(5),
        },
        "& textarea":{
            marginBottom: theme.spacing(5),
            fontWeight: 900,
            fontSize: "1.2rem",
            padding: "10px",
            
        },
        "& textarea::placeholder":{
            color: "#1F6E8C",
        },
        
    },
    formulario: {
        display: "flex",
        flexDirection: "column",
        "& input": {
            marginBottom: theme.spacing(5)
        }
        
    }
 }))

export default Contact