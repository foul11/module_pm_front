import React from 'react';
import fileSaver from 'file-saver';

import { useDispatch } from 'react-redux';
import { openUploadTasks } from '../store/popup';
import { selectTasks, useAppDispatch } from '../store';
import { useSelector } from '../utils';

import { AppBar, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import CachedIcon from '@mui/icons-material/Cached';
import { getTasks } from '../store/tasks';

export default function Header() {
    const tasks = useSelector(selectTasks);
    const dispatch = useAppDispatch();
    
    return <>
        <AppBar sx={{ display: 'flex', flexDirection: 'row', px: 1 }}>
            <Typography variant='h6' sx={{ p: 1 }}>
                TODO's App UltraSecurity
            </Typography>
            
            <Box sx={{ flexGrow: 1 }} />
            
            <Box sx={{ display: 'flex', gap: 1, py: 0.5 }}>
                <IconButton
                    onClick={() => dispatch(openUploadTasks({ open: true }))}
                >
                    <UploadIcon />
                </IconButton>
                
                <IconButton
                    onClick={() => fileSaver(new Blob([JSON.stringify(tasks, undefined, 4)], { type: 'application/json' }), 'tasks.json')}
                >
                    <DownloadIcon />
                </IconButton>
                                
                <IconButton
                    onClick={() => {
                        dispatch(getTasks());
                    }}
                >
                    <CachedIcon />
                </IconButton>
            </Box>
        </AppBar>
    </>;
}