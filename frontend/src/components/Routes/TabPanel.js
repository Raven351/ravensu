import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
    <Typography 
    component="div" 
    role="tabpanel" 
    hidden={value !== index} 
    id={`tabpanel-${index}`} 
    tabControl={`tab-${index}`} 
    {...other}>
        {value === index && <Box p={3} style = {{marginTop: 50}}>{children}</Box>}
    </Typography>);
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

export default TabPanel
