import axios from "axios";
import { useState } from "react";
import env from "../apiData.json";
import { populationType } from "../type/populationType";

export const useGetPopulation = () =>
{
    const [population, setPopulation] = useState<Array<Object>>([{}]);

    const getPopulation = (prefCode:number) =>
    {
        const url = env.url.population;
        const key = env.key.resasKey;
        axios
            .get( url + prefCode.toString(), {
                headers: {
                    "X-API-KEY": key,
                },
            } )
            .then( ( res ) =>
            {
                const data: populationType = res.data.result.data[ 0 ].data;
                const oldPopulation = []
                for ( let i = 1980; i <= 2020; i += 10)
                {
                    let value = data.find( ( v ) => v.year === i )
                    if ( value )
                    {
                        oldPopulation === [] ?
                            oldPopulation[ 0 ] = value :
                            oldPopulation.push( value )
                        setPopulation( [ ...oldPopulation ] );
                    }
                }
            } );
    }
    return { getPopulation, population }
}
