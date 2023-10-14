"use client";

import Tl from './tl'
import Tlphone from './tlphone'
import React, { useState, useEffect } from 'react'

export default function Timeline2(){
    const targetDate = new Date('2023-10-20T23:59:59'); // Tanggal target countdown
    const [countdown, setCountdown] = useState(calculateCountdown(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateCountdown(targetDate));
        }, 1000);

        // Bersihkan interval ketika komponen tidak lagi digunakan atau countdown mencapai 0
        return () => clearInterval(interval);
    }, [targetDate]);

    function calculateCountdown(targetDate) {
        const now = new Date();
        const difference = targetDate - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        return { days, hours, minutes };
    }

    return(
        <main className='m-auto w-11/12 text-white'>
            <div className="rounded-bl-2xl rounded-br-2xl" id="bggradient6">
                <div className="flex justify-evenly mr-2 ml-2">
                    <h1 className="text-3xl mt-8 p-4">our<br />timeline</h1>
                    <div className='flex items-center'>
                        <div className="flex-col text-center mt-8 p-2 md:p-4 w-auto rounded-xl" id="bggradient7">
                            <h1 className="text-lg md:text-2xl font-bold">Batas pendaftaran lomba</h1>
                            <h1 className="text-lg font-mono md:tetx-2xl animate-pulse" id='countdown'>{countdown.days}Hari {countdown.hours}Jam {countdown.minutes}Menit</h1>
                        </div>
                    </div>
                </div>
                <div className='ml-4 mr-4 mt-4'>
                    <Tl />
                    <Tlphone />
                </div>
            </div>
        </main>
    )
}