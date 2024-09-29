"use client"

import React, { useState, useEffect } from 'react'

interface IDelayLoading {
    children: React.ReactNode
}

function DelayLoader({ children }: IDelayLoading) {

    const [timer, setTimer] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTimer(true);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {
                timer ? children : <div>loading</div>
            }
        </>
    )
}

export default DelayLoader