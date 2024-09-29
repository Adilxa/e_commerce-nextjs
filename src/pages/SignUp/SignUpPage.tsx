"use client"
import { TextField, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import $api from '@/http/api';
import { useRouter } from 'next/navigation'

function SignUpPage() {

    const router = useRouter()

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onRegister = async () => {
        try {
            await $api.post("user/signup", { ...data })
            router.push("/signin")
        } catch (e: unknown) {
            console.log(e);
        }
    }

    return (
        <Box display="flex" sx={{
            flexDirection: "column",
            gap: "10px"
        }}>
            <TextField
                value={data.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData({ ...data, name: event.target.value });
                }}
                id="outlined-basic" label="Username" variant="outlined" />
            <TextField
                value={data.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData({ ...data, email: event.target.value });
                }}
                id="outlined-basic" label="Emial" variant="outlined" />
            <TextField
                value={data.password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData({ ...data, password: event.target.value });
                }}
                id="outlined-basic" label="Password" type='password' variant="outlined" />
            <Button onClick={onRegister} variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Box>
    )
}

export default SignUpPage