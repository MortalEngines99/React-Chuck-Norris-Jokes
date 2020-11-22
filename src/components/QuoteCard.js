import { Button, Card, CardActions, CardContent, CircularProgress, colors, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth:500,
        backgroundColor:"#97A7B3",
    },
    body: {
        fontStyle:"italic",
    },
    cardactionsRoot:{
        justifyContent:"center",
    }

});

const QuoteCard = () => {

    const getNewQuote = () => {
        const URL = "https://api.chucknorris.io/jokes/random";
    
        //Set state to loading
        setQuoteInfo({loading:true});
    
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setQuoteInfo({
                loading:false,
                quote:data.value,
            })
        })
    }

    //useEffect to get a new jokes on app load
    useEffect(getNewQuote,[]);

    //setting state
    const [quoteInfo,setQuoteInfo] = useState({
        loading:true,
        quote:""
    })
    
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                
                {
                    quoteInfo.loading ? 
                        <CircularProgress /> 
                    :
                    <Typography className={classes.body} variant="body1" component="p">
                        "{quoteInfo.quote}"
                    </Typography>

                }

            </CardContent>


        <CardActions classes={{root:classes.cardactionsRoot}}>
            <Button size="small" color="primary" variant="contained" onClick={getNewQuote}>Get another one</Button>
        </CardActions>

        </Card>
    )
}

export default QuoteCard
