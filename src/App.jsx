import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import Index from './components/pages/Index';

export default function App({}) {
    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3} autoHideDuration={3000} preventDuplicate>
                <Index />
            </SnackbarProvider>
        </ThemeProvider>
    );
}

