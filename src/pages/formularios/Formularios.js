import React, {useEffect, useState} from "react";
import {
    Grid,
    Paper,
    Box,
    TextField,
    Stack,
    CardHeader,
    CardContent,
    Button,
    Card,
    text,
    Typography,
    FormControl,
    InputLabel,
    Input,
    FormHelperText

}  from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux';

const Formularios = () => {
    const initialData = {
        name: "",
        age: "",
        
    }

    const initialErrors = {
        name: "",
        age: "",
        
    }

    const dispatch = useDispatch()
    const [data, setData]= useState(initialData)
    const [errors, setErrors]= useState(initialErrors)
    const [hashErr, setHashErr]= useState(false)

    useEffect(() =>{ 
        dispatch(appActions.setPageTitle("FORMULARIOS"))
        
    }   ,[])

const handleChange = (e) =>{
    setData(prev=>{
        return({
            ...prev,
            [e.target.name]: e.target.value,
        })
    })
}

const handleSubmit = async () => {
    if(data.name === ""){
        await setHashErr(true)
        await setErrors(err=>{
            return({
                ...errors,
                name: "El Nombre no puede estar en blanco"
            })
        })
    }
    if(data.age === ""){
        await setHashErr(true)
        await setErrors(err=>{
            return({
                ...errors,    
                age: "La Edad no puede estar en blanco"
            })
        })
    }
    if(hashErr){
        console.log("no es Valido")
    }else{
        console.log("Validado")
        }
    }
    
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Card>
                    <CardHeader title="Formulario" />
                    <CardContent>
                        <Stack spacing={2}>

                            <Stack sx={{justifyContent:'space-around'}} direction='row'> 
                                <Grid item md={6}>
                                    <FormControl required={true} error={true}>
                                        
                                        <TextField initialValue={data.name} name={"name"} label="Nombre" variant="outlined" onBlur={handleChange} />
                                        {
                                            errors.name && (<FormHelperText id="my-helper-text">{errors.name}</FormHelperText>)                                        }
                                        
                                    </FormControl>
                                    
                                </Grid>
                            </Stack>

                            <Stack sx={{justifyContent:'space-around'}} direction='row'> 
                                <Grid item md={6}>
                                    <FormControl required={true} error={true}>
                                        
                                        <TextField initialValue={data.age} name={"age"} label="Edad" variant="outlined" onBlur={handleChange} />
                                        {
                                            errors.age && (<FormHelperText id="my-helper-text">{errors.age}</FormHelperText>)                                        }
                                        
                                    </FormControl>
                                    
                                </Grid>
                            </Stack>

                            <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                    <Button variant="contained" onClick={()=>handleSubmit()}>Enviar</Button>
                                </Grid>
                            </Stack>
                        </Stack>  
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    ); 
};
export default Formularios;