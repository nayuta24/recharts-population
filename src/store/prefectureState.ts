import { atom } from "recoil";
import { prefecturesArrayType } from "../type/prefecturesArrayType";

export const prefectureState = atom<prefecturesArrayType>( {
    key: 'prefectureState',
    default:[{}]
})
