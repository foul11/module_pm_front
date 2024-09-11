import { createSlice } from '@reduxjs/toolkit';

/**
 * @template T
 * @typedef {import('../utils').Action<T>} Action
 */

/**
 * @typedef {{
 *  EditTask: {
 *   id: string | null,
 *  },
 *  UploadTask: {
 *   open: boolean,
 *  }
 * }} Popup
 */

export const reduxSlice = createSlice({
    name: 'popup',
    initialState: /** @type {Popup} */ ({
        EditTask: {
            id: null,
        },
        
        UploadTask: {
            open: false,
        },
    }),
    reducers: {
        /** @param {Action<Popup['EditTask']>} action */
        editTask(state, action) {
            state.EditTask.id = action.payload.id;
        },
        
        /** @param {Action<Popup['UploadTask']>} action */
        openUploadTasks(state, action) {
            state.UploadTask.open = action.payload.open;
        },
    },
});

export const { editTask, openUploadTasks } = reduxSlice.actions;
export default reduxSlice.reducer;