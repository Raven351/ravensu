import React, { useContext } from 'react'
import {Button, Menu, MenuItem} from '@material-ui/core'
import {languageOptions} from '../../lang/Dictionary'
import {LangaugeContext} from '../../lang/LangaugeContext'
import TranslateIcon from '@material-ui/icons/Translate';

export default function LangaugeSelector(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const langaugeContext = useContext(LangaugeContext);
    const handleClick = (event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }

    const selectLangauge = (languageId) =>{
        const selectedLanguage = languageOptions.find(item => item.id === languageId);
        langaugeContext.setLanguage(selectedLanguage);
        handleClose();
    }

    const MenuItems = () => {
        return(
            <>
                {languageOptions.map((language)=>{
                    return(
                        <MenuItem onClick = {() => selectLangauge(language.id)} style = {{minWidth: 150}}>{language.text}</MenuItem>
                    )
                })}    
            </>
        )
    }

    return(
        <div>
            <Button onClick = {handleClick} startIcon = {<TranslateIcon/>} style = {{color: "#ffffff", minWidth: 100}}>
                {langaugeContext.language.text}
            </Button>
            <Menu
                id="lanaguageSelectorMenu"
                keepMounted
                anchorEl = {anchorEl}
                open = {Boolean(anchorEl)}
                onClose = {handleClose}
            >
                <MenuItems/>
            </Menu>
        </div>
    )
} 