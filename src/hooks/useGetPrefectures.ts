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

        const newPrefectures: prefecturesArrayType = [{}];
        axios
            .get( url, {
                headers: { "X-API-KEY": key },
            } )
            .then( ( res ) =>
            {
                res.data.result.map( (data:responseType) =>
                {
                    newPrefectures.push( {
                        number: data.prefCode,
                        name: data.prefName,
                        isChecked: false
                    } )
                } )
                setPrefectures(newPrefectures)
            } );
    }

    return { getPrefectures }
}
