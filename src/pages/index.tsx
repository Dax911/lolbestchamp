import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useMemo, useReducer, Fragment } from "react";
import { trpc } from "../utils/trpc";
import { ChampionsEndPointDataType } from "../zod/models/championModel";
import FirstRandChamp from "./fetchChamps";
import ChampsTimeLine from "./fetchChamps";
import Page1 from "./fetchChamps";
import lol from "riot-lol";
import { getComparisonPlayers, getLatestVersion, getVersionData} from "../../src/components/functions"

const Home: NextPage = (props) => {

  //this all needs to be trpc voting logic
  const hello = trpc.useQuery(["hello", { text: "from tRPC" }]);
  const exampleData = trpc.useQuery(["example"]);
  const { invalidateQueries } = trpc.useContext();
  const createExample = trpc.useMutation("create-example", {
    onSuccess: () => invalidateQueries("example"),
  });
 
  const [serverData, setServerData] = useState<ChampionsEndPointDataType[]>([]);
  const [champs, setChamps] = useState<ChampionsEndPointDataType[]>([]);
  const [rerollid, reroll] = useReducer(() => (Date.now()), Date.now());

  useEffect(() => {
    getLatestVersion()
      .then(getVersionData)
      .then(setServerData);
  }, []);

  useEffect(() => {
    if (serverData.length) {
      Promise.resolve(serverData)
        .then(getComparisonPlayers)
        .then(setChamps);
    }
  }, [serverData, rerollid]);

  const playerChildren = useMemo(() => {
    if (champs.length === 0) return null;
    const children = champs.map((champ) => (
<div className="py-6 text-2xl" key={champ.key}>
            <div className="flex">
            <div className="flex flex-col items-center justify-between md:flex-row animate-fade-in">



                <div className="flex-1 w-1/2 card glass">
                  <div className="carousel">
                    <div className="w-full carousel-item">
                      <img
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_1.jpg`}
                        className="w-full carousel-item"
                        alt="car!"
                      />

                      <img
                        src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_2.jpg"
                        className="w-full carousel-item"
                        alt="car!"
                      />

                      <img
                        src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg"
                        className="w-full carousel-item"
                        alt="car!"
                      />
                    </div>
                  </div>

                  <div className="card-body">
                    <h2 className="text-4xl card-title">{champ.name}</h2>
                    <p>
                      {champ.blurb}
                    </p>
                    <div className="badge badge-info badge-lg"> Tag </div>
                    <div className="justify-end card-actions">
                      <button className="btn btn-accent">VOTE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          



 
      
    ));

    return (
      <Fragment>
        {children}
        <button onClick={reroll}>Reroll</button>
      </Fragment>
    );
  }, [champs, reroll]);

  return (
    <div>
      <Head>
        <title>Hottest Champion</title>
        <meta
          name="League of Legends Charater Rankings"
          content="Who is the most popular champion."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-24 mx-auto">
        <h1 className="font-extrabold text-center text-7xl">
          Which Champion is better?
        </h1>

        <div className="w-fit">
          <div className="flex flex-col items-center justify-center py-6 text-2xl">
            Finally, answering the age old question of the best Champion.
          </div>
          {playerChildren}
          
        </div>
      </div>
      </div>
  );
};

export default Home;
