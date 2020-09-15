import {languageOptions, dictionaryList} from './Dictionary'
import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import axios from 'axios'

function getGeoInfo() {
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        data.country_code.toLowerCase();
        return data.country_code;
    }).catch((error) => {
        console.log(error);
        return null;    
    });
}

export const LangaugeContext = createContext({
    language: languageOptions[0],
    dictionary: dictionaryList[languageOptions[0].id]
});

export function LanguageProvider(props){
    const langaugeContext = useContext(LangaugeContext);
    const [language, setLanguage] = useState(langaugeContext.language);
    const [dictionary, setDictionary] = useState(langaugeContext.dictionary);
    // useEffect(() => {
    //     if (getGeoInfo != null && getGeoInfo != undefined){
    //         const countryCode = getGeoInfo();
    //         getGeoInfo();
    //         alert(countryCode);
    //         const regionLanguage = languageOptions.find(item => item.id === getGeoInfo());
    //         //alert(getGeoInfo())
    //     }
    // })
    const provider = {
        language,
        dictionary,
        setLanguage: (selectedLanguage) => {
            setLanguage(selectedLanguage);
            setDictionary(dictionaryList[selectedLanguage.id]);
        }
    };
    return(
        <LangaugeContext.Provider value = {provider}>
            {props.children}
        </LangaugeContext.Provider>
    )
}