import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ChampionsEndPointDataType } from "../zod/models/championModel";


export default function ChampsTimeLine(props: { champs: any; }) {
    console.log(props.champs);
    return (
        <>
    </>
    )
}

/*
fetch champion.json (could be server side if wanted that way the client would alway 
have access to the entire champion list.)

randomly pick a champion like so champion[n] where it calls a random number that 
is in the range of the length of the array of champions.

then pass the needed feilds to the component and display the champion's name,
also use data to parse needed data to another request to get the image url etc.
*/
