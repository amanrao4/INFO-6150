import React, { useState } from 'react'
import { registerUser } from '../../api'
import './register.css'
import Navbar from "../Navbar";
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const Register = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        type: "",
    });

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const validateForm = ()=>{
        if(!formData.email || !formData.fullName || !formData.password){
            setError('All fields are required')
            return false
        }
        
        if (!formData.type){
            setError('Please select a role')
            return false
        }
        setError('')
        return true
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!validateForm()) return;

        try{
            const response = await registerUser(formData.email, formData.fullName, formData.password, formData.type)
            console.log(response.error);
            if (!response.success) {
                if(response.error != null) {
                    setError(response.error)
                } else {
                    setError(response.message)
                }

                return;
            }
            setError('')
            setSuccess(response.message)
            setFormData({email:'', fullName:'', password:'', type:''})
        }catch(err){
            setError(err.response?.data?.message||'Registration failed. Please try again.')
        }
    }
    
    return (
        <>
        <Navbar/>

        <div className="register-container">
            <Box component="form" display="flex" flexDirection="column" alignItems="center" mt={4}>
                <Typography variant="h5" gutterBottom color="white">
                    Register
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'black' },
                        label: { color: 'white' },
                        backgroundColor: '#444',
                    }}
                />
                <TextField
                    label="Full Name"
                    type="text"
                    name="fullName"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={formData.fullName}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'black' },
                        label: { color: 'white' },
                        backgroundColor: '#444',
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={formData.password}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'black' },
                        label: { color: 'white' },
                        backgroundColor: '#444',
                    }}
                />
                <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    sx={{ backgroundColor: '#444', color: 'white' }}
                    required
                >
                    <InputLabel sx={{ color: 'white' }}>Role</InputLabel>
                    <Select
                        name="type" 
                        value={formData.type} 
                        onChange={handleChange} 
                        label="Role"
                        sx={{ color: 'white' }}
                    >
                        <MenuItem value="">
                            <em>Select a role</em>
                        </MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="employee">Employee</MenuItem>
                    </Select>
                </FormControl>
                {error && (
                    <Typography variant="body1" color="error" mt={2}>
                        {error}
                    </Typography>
                )}
                {success && (
                    <Typography variant="body1" color="green" mt={2}>
                        {success}
                    </Typography>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: '#800000',
                        color: 'white',
                        '&:hover': { backgroundColor: '#b30000' },
                    }}
                >
                    Register
                </Button>
            </Box>
        </div>
        </>
    )
}

export default Register