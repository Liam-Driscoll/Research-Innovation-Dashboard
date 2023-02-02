import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function AreasOfInterest(props){
    //Areas Of Interest Tab Open

    const [numberOfRows, setNumberOfRows] = useState(4);
    const [increasePublicationListBy, setincreasePublicationListBy] = useState(4);

    function ShowMoreAreasOfInterest(){
        setNumberOfRows(numberOfRows+increasePublicationListBy);
        setincreasePublicationListBy(increasePublicationListBy*2);
    }

    function ShowMoreAreasOfInterestButton() {
        if(numberOfRows<props.areasOfInterest.length){
            return(<Button onClick={ShowMoreAreasOfInterest}
                sx={{m: 1, border: "2px solid Black", color: "black", backgroundColor: 'white'}}>
                    Show More Areas Of Interest
                </Button>);
        }
        return;
    }

    const Areas = props.areasOfInterest.filter((data,index) => index < numberOfRows).map((area) => {
        return(
            <Paper key={area} square={true} elevation={0} sx={{width: "23.79%", mr: "1%", border: 1, mt: "2%"}} component={Stack} direction="column" justifyContent="space-between" ml={0}>
                    <Typography align='center' variant='h6'>
                        {area[0]}
                    </Typography>
                <Typography align='right' sx={{mr: "2%"}}>{area[1]}</Typography>
            </Paper>
        );
    });

    const topFiveAreasOfInterest = () => {
        return(
            <Grid item xs={12} sx={{pl: "2%", pr: "2%"}}>
                <Box sx={{flexGrow: 1}}>
                    <div id ='Areas_Of_Interest_Text'>Areas Of Interest</div>
                    <Link style={{cursor: 'pointer'}} onClick={props.onClickFunctions.showSimilarResearchersFunc} id='similar_researchers'>{props.numberOfSimilarResearchers} Similar Researchers</Link>
                </Box>  
                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    width: 150,
                    height: 150,},}}
                >
                    <Paper square={true} elevation={0} sx={{flexGrow: 1, ml: 0, mt: 1, mr: 1, mb: 1, border: 1}} component={Stack} direction="column" justifyContent="space-between" ml={0}>
                        <Paper sx={{height: "90%"}} elevation={0} component={Stack} direction="column" justifyContent="center">
                            <Typography align='center' variant='h5'>
                                {props.areasOfInterest[0][0]}
                            </Typography>
                        </Paper>
                        <Paper sx={{height: "10%"}} elevation={0} component={Stack} direction="column" justifyContent="end">
                            <Typography align='right' sx={{mr: "2%"}}>
                                {props.areasOfInterest[0][1]}
                            </Typography>
                        </Paper>
                    </Paper>
                    <Paper square={true} elevation={0} sx={{flexGrow: 1, m: 1, border: 1}} component={Stack} direction="column" justifyContent="space-between">
                        <Paper sx={{height: "90%"}} elevation={0} component={Stack} direction="column" justifyContent="center">
                            <Typography align='center' variant='h5'>
                                {props.areasOfInterest[1][0]}
                            </Typography>
                        </Paper>
                        <Paper sx={{height: "10%"}} elevation={0} component={Stack} direction="column" justifyContent="end">
                            <Typography align='right' sx={{mr: "2%"}}>
                                {props.areasOfInterest[1][1]}
                            </Typography>
                        </Paper>
                    </Paper>
                    <Paper square={true} elevation={0} sx={{flexGrow: 1, m: 1, border: 1}} component={Stack} direction="column" justifyContent="space-between">
                        <Paper sx={{height: "90%"}} elevation={0} component={Stack} direction="column" justifyContent="center">
                            <Typography align='center' variant='h5'>
                                {props.areasOfInterest[2][0]}
                            </Typography>
                        </Paper>
                        <Paper sx={{height: "10%"}} elevation={0} component={Stack} direction="column" justifyContent="end">
                            <Typography align='right' sx={{mr: "2%"}}>
                                {props.areasOfInterest[2][1]}
                            </Typography>
                        </Paper>
                    </Paper>
                    <Paper square={true} elevation={0} sx={{flexGrow: 1, m: 1, border: 1}} component={Stack} direction="column" justifyContent="space-between">
                        <Paper sx={{height: "90%"}} elevation={0} component={Stack} direction="column" justifyContent="center">
                            <Typography align='center' variant='h5'>
                                {props.areasOfInterest[3][0]}
                            </Typography>
                        </Paper>
                        <Paper sx={{height: "10%"}} elevation={0} component={Stack} direction="column" justifyContent="end">
                            <Typography align='right' sx={{mr: "2%"}}>
                                {props.areasOfInterest[3][1]}
                            </Typography>
                        </Paper>
                    </Paper>
                    <Paper square={true} elevation={0} sx={{flexGrow: 1 , ml: 1, mt: 1, mr: 0, mb: 1, border: 1}} component={Stack} direction="column" justifyContent="space-between">
                        <Paper sx={{height: "90%"}} elevation={0} component={Stack} direction="column" justifyContent="center">
                            <Typography align='center' variant='h5'>
                                {props.areasOfInterest[4][0]}
                            </Typography>
                        </Paper>
                        <Paper sx={{height: "10%"}} elevation={0} component={Stack} direction="column" justifyContent="end">
                            <Typography align='right' sx={{mr: "2%"}}>
                                {props.areasOfInterest[4][1]}
                            </Typography>
                        </Paper>
                    </Paper>
                </Box>
                <Box textAlign='center'>
                    <Button onClick={props.onClickFunctions.showAreasOfInterestFunc} sx={{m: 1, border: "2px solid Black", color: "black", backgroundColor: 'white'}}>
                        View All Areas Of Interest
                    </Button>
                </Box>
            </Grid>
        )   
    }

    const allAreasOfInterest = () => {

        return(
        <Grid item xs={12}>
            <Paper square={true} elevation={0} variant="outlined">

        <Box sx={{flexGrow: 1, paddingLeft: "2%"}}>
            <div id ='Areas_Of_Interest_Text'>Areas Of Interest</div>
        </Box>
        <Grid container sx={{paddingLeft: "2%", paddingRight: "2%"}}>
            {Areas}
        </Grid>

        <Box textAlign='center'>
            <ShowMoreAreasOfInterestButton />
        </Box>
        </Paper>
        </Grid>);
    }
    
    return(
        <Grid container>
        {!props.AreasOfInterestTabOpened && topFiveAreasOfInterest()}
        {props.AreasOfInterestTabOpened && allAreasOfInterest()}
        </Grid>
    );
}