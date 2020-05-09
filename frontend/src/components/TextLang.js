import React from 'react'
import { useContext } from "react";
import { LangaugeContext } from "../lang/LangaugeContext";
import {Box, Typography} from '@material-ui/core'

export default function TextLang(props){
    const languageContext = useContext(LangaugeContext);
    return languageContext.dictionary[props.textId];
}