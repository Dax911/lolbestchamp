import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { getChamps } from "../utils/fetchRandom.ts"

const Home: NextPage = () => {
  const hello = trpc.useQuery(["hello", { text: "from tRPC" }]);
  const exampleData = trpc.useQuery(["example"]);
  const { invalidateQueries } = trpc.useContext();
  const createExample = trpc.useMutation("create-example", {
    onSuccess: () => invalidateQueries("example"),
  });

  return (
    <>

    <div>
      <Head>
        <title>Hottest Champion</title>
        <meta name="League of Legends Charater Rankings" content="Who is the most popular champion." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col items-center justify-center p-24 min-h-screen mx-auto">
        <h1 className="font-extrabold text-center text-7xl">
          Which champion do you like better?
        </h1>

        <div className="w-fit">
          
          <div className="py-6 text-2xl">
            Here is the subtitle
          </div>
          <div className="py-6 text-2xl">
      

            <div className="flex">
              <div className=" flex justify-between items-center flex-col md:flex-row animate-fade-in">
            <div className="flex-1 card w-1/2 glass">
                <figure><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" alt="car!"/></figure>
            
                  <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div> 

              <div className="cent... p-8 italic text-xl">OR</div>

            <div className="flex-1 card w-1/2 glass">
                <figure><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" alt="car!"/></figure>
              

            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>  
  </div>
            </div>
              

          </div>
        </div>
      </div>
    </div>
      </> 
  );
};

export default Home;
