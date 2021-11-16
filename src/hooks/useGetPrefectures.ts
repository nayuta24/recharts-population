import axios from "axios";
import { useSetRecoilState } from "recoil";

import env from "../apiData.json"
import { prefectureState }from "../store/prefectureState"
import { prefecturesArrayType } from "../type/prefecturesArrayType";

type responseType = {
    prefCode: number,
    prefName: string
}

export const useGetPrefectures = () =>
{
    const setPrefectures = useSetRecoilState( prefectureState );

    const url = env.url.prefectures
    const key = env.key.resasKey

    const getPrefectures = () =>
    {

        var newPrefectures: prefecturesArrayType = null;
        axios
            .get( url, {
                headers: { "X-API-KEY": key },
            } )
            .then( ( res ) =>
            {
                const result = res.data.result;

                if(result){
                    result.map( (data:responseType) =>
                    {
                        if ( newPrefectures == null )
                        {
                            newPrefectures = [ {
                                number: data.prefCode,
                                name: data.prefName,
                                isChecked: false
                            }]
                        } else
                        {
                            newPrefectures.push( {
                                number: data.prefCode,
                                name: data.prefName,
                                isChecked: false
                            } )
                        }
                    } )
                    setPrefectures( newPrefectures )
                }
            } )
            .catch();
    }

    return { getPrefectures }
}
