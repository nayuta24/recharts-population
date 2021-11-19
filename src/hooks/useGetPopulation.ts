import axios from "axios";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import env from "../apiData.json";
import { prefectureState } from "../store/prefectureState";
import { populationType } from "../type/populationType";

const defaultData = [
    { name: "1970" }, { name: "1980" }, { name: "1990" },
    { name: "2000" }, { name: "2010" }, { name: "2020" }
];

const url = env.url.population;
const key = env.key.resasKey;

export const useGetPopulation = () =>
{
    const [ population, setPopulation ] = useState<Array<Object>>( [] );
    const prefectures = useRecoilValue( prefectureState );
    const getPopulation = () =>
    {
        const newData = [ ...defaultData ];
        // mapを回し、チェックがついている県の人口推移を取得していき、配列に格納する
        prefectures?.map( (prefecture) =>
        {
            if ( prefecture.isChecked )
            {
                axios.get( url + prefecture.number, {
                    headers: {
                        "X-API-KEY": key,
                    },
                } ).then( ( res ) =>
                {
                    const data: populationType = res.data.result.data[ 0 ].data;
                    for ( let i = 0; i < 6; i++ )
                    {
                        // レスポンスのオブジェクトで、年代から検索して要素を更新する
                        // valueには検索した年代の人口が取得される
                        let value = data.find( ( v ) => v.year === ( 1970 + ( i * 10 ) ) )?.value
                        if ( value )
                        {
                            newData[i] = {...newData[i],[prefecture.name]:value}
                        }
                    }
                    setPopulation(newData)
                })
            }
        } )
    }
    return{getPopulation, population}
}
