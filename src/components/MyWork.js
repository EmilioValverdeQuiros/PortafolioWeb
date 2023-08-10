import { Card, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core'
import mockData from './Trabajos';

const MyWork = ({title, dark, id}) => {
    const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <Typography variant="h3" className={classes.trabajo}>
                {title}
            </Typography>
            <Grid container className={classes.grid}>
                {
                    mockData.map(({title, image, link}, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia image={image} className={classes.thumbnail} thumbnail="caratula"/>
                                <CardContent className={classes.content}>
                                    <a href={link} color="primary" target="_blank" >
                                        {title}
                                    </a>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "60vh",
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        
    },
    grid: {
        marginTop: theme.spacing(5),
    },
    card: {
        maxWidth: 345,
        minHeight: 280,
        margin: theme.spacing(3),
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    content: {
        textAlign: "center",
        marginTop: theme.spacing(3),
    },
    thumbnail: {
        height: 0,
        paddingTop: '56.25%',
    },
    trabajo: {
        paddingTop: theme.spacing(5),
    }
 }))

export default MyWork