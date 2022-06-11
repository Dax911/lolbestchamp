import { GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from "next/types";
import { ChampionsEndPointDataType } from "../../zod/models/championModel";

function ChampsDataRenderExample(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return JSON.stringify(props);
}


export const getStaticProps = async () => {
    const res = await fetch('http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json')
    const data: ChampionsEndPointDataType[] = await res.json()
  
    return {
      props: {data} 
    }
  }


export default ChampsDataRenderExample;

//{Champs.data.Champ.map((champ: any) => (
//    <li key={champ.key}>
//
//        <img src={Champs.image.full} alt={Champs.name} />
//        <h2>{champ.name}</h2>
//        <p>{champ.blurb}</p>
//    </li>
//))}

