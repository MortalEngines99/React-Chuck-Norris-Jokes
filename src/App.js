import './App.css';

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import QuoteCard from "./components/QuoteCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    marginBottom:25
  },
})


function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Container classes={{ root: classes.root }}>

        <Typography className={classes.title} variant="h3" color="textSecondary">
          Chuck Norris Jokes
        </Typography>

        <QuoteCard />
      </Container>
    </div>


  );
}

export default App;
