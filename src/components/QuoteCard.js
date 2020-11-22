import { Button, Card, CardActions, CardContent, CircularProgress, colors, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth:500,
        backgroundColor:"#97A7B3",
        // backgroundColor:"#0298D4",
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
                status:"done",
                quote:data.value,
            })
        })
    }

    const [quoteInfo,setQuoteInfo] = useState({
        loading:false,
        quote:"Chuck Norris can kill you with a headshot using a shotgun from across the map on call of duty."
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
