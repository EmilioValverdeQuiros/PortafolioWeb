import { makeStyles } from '@material-ui/core'
import React from 'react'
import whatsapp from "./imgs/whatsapp.png"
import github from "./imgs/github.png"
import linkedin from "./imgs/linkedin.png"

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
                <div className={classes.socialmedia}>
                    <a href='https://github.com/EmilioValverdeQuiros' target='_blank'><img src={github}></img></a>
                    <a href='https://www.linkedin.com/in/emilio-valverde-quiros-46540120b/' target='_blank'><img src={linkedin}></img></a>
                    <a href='https://wa.me/50684131234' target='_blank'><img src={whatsapp}></img></a>
                </div>
                
                <hr></hr>

                <div className={classes.footer_below}>
                    <div className={classes.footer_copyright}>
                        <p>
                            @{new Date().getFullYear()} Todos los derechos reservados
                        </p>
                    </div>
                </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#0E2954",
        marginTop:theme.spacing(5),
        padding: "2rem",
    },
    socialmedia: {
        display: "flex",
        justifyContent: "center",
        "& img": {
            width: "40px",
            marginRight: theme.spacing(3),
            justifyContent: "center",
            marginBottom: theme.spacing(2)
        }
    },
    footer_below: {
        color: "#fff",
        textAlign: "center"
    },
    footer_copyright: {
        marginTop: theme.spacing(1)
    }

 }))

export default Footer