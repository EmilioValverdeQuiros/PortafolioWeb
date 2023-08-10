import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Technologies from '../carousel/Technologies';

const Skills = ({title, dark, id}) => {
    const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <Typography variant="h3" className={classes.habilidades}>
                {title}
            </Typography>
            <Technologies/>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
        section: {
            minHeight: "90vh",
        },
        sectiondark: {
            background: "#333",
            color: "#fff",
        },
        sectioncontent: {
            maxWidth: "80vw",
            margin: "0 auto",
        },
        habilidades: {
            paddingTop: theme.spacing(5),
        }
 }))

export default Skills