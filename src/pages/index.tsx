import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { ChampionsEndPointDataType } from "../zod/models/championModel";
import FirstRandChamp from "./fetchChamps";
import ChampsTimeLine from "./fetchChamps";
import Page1 from "./fetchChamps";

const Home: NextPage = (props) => {
  const hello = trpc.useQuery(["hello", { text: "from tRPC" }]);
  const exampleData = trpc.useQuery(["example"]);
  const { invalidateQueries } = trpc.useContext();
  const createExample = trpc.useMutation("create-example", {
    onSuccess: () => invalidateQueries("example"),
  });

  const [champions, getChampions] = useState<ChampionsEndPointDataType[]>([]);

  const url =
    "http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json";

  useEffect(() => {
    getAllChampions();
  }, []);

  const getAllChampions = () => {
    axios
      .get(url)
      .then((response) => {
        const allChampions = response.data.data;
        getChampions(allChampions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <div className="py-6 text-2xl">
            <div className="flex">
            <div className="flex flex-col items-center justify-between md:flex-row animate-fade-in">

            <FirstRandChamp champs={champions} />


                <div className="p-24 divider divider-horizontal">OR</div>
                <div className="flex-1 w-1/2 card glass">
                  <div className="carousel">
                    <div className="w-full carousel-item">
                      <img
                        src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg"
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
                    <h2 className="text-4xl card-title">Ahri</h2>
                    <p>
                      Innately connected to the latent power of Runeterra, Ahri
                      is a vastaya who can reshape magic into orbs of raw
                      energy. She revels in toying with her prey by manipulating
                      their emotions before devouring their life essence.
                      Despite her predatory nature, Ahri retains a sense of
                      empathy as she receives flashes of memory from each soul
                      she consumes.
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
          <div>
            <div className="stats bg-primary text-primary-content">
              <div className="stat">
                <div className="stat-title">Account balance</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                  <button className="btn btn-sm btn-success">Add funds</button>
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Title</div>
              </div>
              <div className="stat">
                <div className="stat-title">Current balance</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                  <button className="btn btn-sm">Withdrawal</button>
                  <button className="btn btn-sm">deposit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
