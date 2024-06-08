import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "messages",
    initialState: [{}],
    reducers: {
        addMessage: (state, action) => {
            if (state.length >= 100) {
                state.pop();
            }
            state.unshift(action.payload);
        },
    },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice;
