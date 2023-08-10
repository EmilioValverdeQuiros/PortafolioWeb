import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/carousel/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {main: blue[500]},
    secondary: {main: "#333"}
  }
})

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar/>
        <About title="Acerca De Mi" id="about" dark={true}/>
        <Skills title="Mis Habilidades" id="skills" dark={false}/>
        <MyWork title="Mis Trabajos" id="work" dark={true}/>
        <Contact title="Contáctame" id="contact" dark={false}/>
        <ScrollToTopButton/>
        <Footer/>
      </div>
    </MuiThemeProvider>
    
  );
}

const useStyles = makeStyles((theme) => ({
   root: {
      
  }
}))

export default App;