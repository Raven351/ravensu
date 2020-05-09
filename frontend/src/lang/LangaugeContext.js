import {langaugeOptions, dictionaryList} from './Dictionary'
import React from 'react'
import { createContext, useContext, useState } from 'react'

export const LangaugeContext = createContext({
    language: langaugeOptions[0],
    dictionary: dictionaryList[langaugeOptions[0].id]
});

export function LanguageProvider(props){
    const langaugeContext = useContext(LangaugeContext);
    const [language, setLanguage] = useState(langaugeContext.language);
    const [dictionary, setDictionary] = useState(langaugeContext.dictionary);
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