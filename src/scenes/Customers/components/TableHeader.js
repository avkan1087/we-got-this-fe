import React, { useState, useEffect } from 'react';
import { Toolbar, Tooltip, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import NewCustomer from '../../../components/dialogs/NewCustomer';

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: theme.spacing(2),
    },
    title: {
        marginRight: theme.spacing(2),
    },
}));

const TableHeader = ({ title }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.container} ${classes.root}`}>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
            {/* <Tooltip title="Filter">
                <IconButton onClick={() => alert('Clicked')}>
                    <FilterListIcon />
                </IconButton>
            </Tooltip> */}
            <NewCustomer />
        </div>
    );
};

export default TableHeader;