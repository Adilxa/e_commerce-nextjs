"use client";
import React, { useState, useContext } from "react";
import { TextField, Box, Button } from "@mui/material";
import $api from "@/http/api";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "@/layouts/AuthLayout";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function SignInPage() {
    const router = useRouter();
    const { setAuth }: any = useContext(AuthContext);

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const onSignin = async () => {
        try {
            const res = await $api.post("user/signin", { ...data });
            const token = res.data.token;

            Cookies.set("token", token, { expires: 7 });

            router.push("/dashboard");
            if (setAuth) setAuth(true);
        } catch (e: unknown) {
            console.log(e);
        }
    };

    return (
        <Box
            display="flex"
            sx={{
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <TextField
                value={data.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData({ ...data, email: event.target.value });
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
            />
            <TextField
                value={data.password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setData({ ...data, password: event.target.value });
                }}
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
            />
            <Button onClick={onSignin} variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Box>
    );
}

export default SignInPage;
