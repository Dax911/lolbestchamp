import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ChampionsEndPointDataType } from "../zod/models/championModel";


export default function FirstRandChamp(props: any ) {
    console.log(props["champs"]);

    let obj = props["champs"];
    let index = [];
    for (var i in props["champs"]) {
        index.push(i);
    }
    index.sort(function(a, b){
        return a== b ? 0 : a < b ? -1 : 1;
    })
    console.log(obj[index[1]]);

    //so get size of obj and then get random number between 0 and size of obj
    //then get the key of that number and get the value of that key
    //then return the value

    
    return (
                <div className="flex-1 w-1/2 card glass">
                  <figure>
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg`}
                      alt="car!"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="text-4xl card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <p>Here is ln 2</p>
                    <p> ln 3 </p>
                    <div className="justify-end card-actions">
                      <button className="btn btn-accent">VOTE</button>
                    </div>
                  </div>
                </div>
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
