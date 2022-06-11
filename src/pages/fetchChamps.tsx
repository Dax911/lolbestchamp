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
//const Page1 = (props: { champions: ChampionsEndPointDataType[]; }) => {
//const [champions, setChampions] = useState<ChampionsEndPointDataType[]>([]);
//useEffect(() => {
 //   axios.get("http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json")
 //   .then(response => {
 //       setChampions(response.data.data);
 //   }
  //  )
 //   .catch(err => {
  //      console.log(err);
 //   }
  //  )
//}, []);

  //      return (
   //         <div>
  //              <h1>All Champions</h1>
   //             <ul>
    //                {champions.map((a, index) => {
    //                    return <li key={a.data.Champ}>{a.data.Champ.name}</li>;
    //                }
    //                )}
    //            </ul>
    //        </div>
    //    );
   // }





//export async function getServerSideProps(res, resolvedUrl) {
//    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json')
//    const data = await res.json()

//    return {
//        data: data.data.Champ,
//    }
//}

//export default Page1;
/*
fetch champion.json (could be server side if wanted that way the client would alway 
have access to the entire champion list.)

randomly pick a champion like so champion[n] where it calls a random number that 
is in the range of the length of the array of champions.

then pass the needed feilds to the component and display the champion's name,
also use data to parse needed data to another request to get the image url etc.
*/
