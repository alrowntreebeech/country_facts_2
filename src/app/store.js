import { configureStore } from "@reduxjs/toolkit";
import searchPageReducer from "../components/searchPage/searchPageSlice";

export const store = configureStore({
    reducer: {
        searchPage: searchPageReducer,
    }
});