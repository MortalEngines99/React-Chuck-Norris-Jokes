import { Button, Card, CardActions, CardContent, colors, Typography } from '@material-ui/core';
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

});

const QuoteCard = () => {

    const [quote,setQuote] = useState("Chuck Norris can kill you with a headshot using a shotgun from across the map on call of duty.")
    
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                
                <Typography className={classes.body} variant="body1" component="p">
                    "{quote}"
                </Typography>

            </CardContent>


        <CardActions>
            <Button size="large" color={colors.red.A700} variant="contained">Learn More</Button>
        </CardActions>

        </Card>
    )
}

export default QuoteCard
