import React, {useEffect} from "react";
import {
    Grid,
    Paper,
    Box,
    Link,
    Typography,
    Breadcrumbs,
    
}  from '@mui/material';
import Todo from "../todo/Todo";
import FetchList from "../fetchList/FetchList";

const Dashboard = () => {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <Paper sx={{p: 2}} >
                <Breadcrumbs aria-label="breadcrumb" >
                    <Link color="inherit" href="" onClick={Dashboard}>
                        HOME
                    </Link>
                    <Link color="inherit" href="todo" onClick={Todo}>
                        TODO
                    </Link>
                    <Link color="inherit" href="fetch-list" onClick={FetchList}>
                        FECTH-LIST
                    </Link>
                </Breadcrumbs>
                </Paper>
            </Grid>
        </Grid>
    ); 
};
export default Dashboard;