import React from 'react';

import { useSelector } from '../utils';
import { useDispatch } from 'react-redux';
import { complete, del } from '../store/tasks';
import { editTask } from '../store/popup';

import { Box } from '@mui/system';
import { Checkbox, IconButton, List, ListItem } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

/**
 * @param {{
 *  filter: string
 * }} param0
 */
export default function TasksList({ filter }) {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    
    const filteredTasks = tasks.filter(task => task.name.includes(filter));
    
    return <>
        <List>
            {filteredTasks.map((task) => (
                <ListItem
                    key={task.id}
                    sx={{ gap: 1 }}
                >
                    <Checkbox
                        checked={task.complete}
                        onChange={(e) => dispatch(complete({ id: task.id, complete: e.target.checked }))}
                    />
                    
                    {task.name}
                    
                    <Box sx={{ flexGrow: 1 }} />
                    
                    <IconButton
                        onClick={() => dispatch(editTask({ id: task.id }))}
                    >
                        <EditIcon />
                    </IconButton>
                    
                    <IconButton
                        onClick={() => dispatch(del({ id: task.id }))}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
            
            {!filteredTasks.length && <>
                <ListItem sx={{ justifyContent: 'center' }}>No tasks</ListItem>
            </>}
        </List>
    </>;
}