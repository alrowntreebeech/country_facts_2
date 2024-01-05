import { configureStore } from "@reduxjs/toolkit";
import searchPageReducer from "../components/searchPage/searchPageSlice";
import countryModalReducer from "../features/countryModal/countryModalSlice";

export const store = configureStore({
    reducer: {
        searchPage: searchPageReducer,
        countryModal: countryModalReducer
    }
});