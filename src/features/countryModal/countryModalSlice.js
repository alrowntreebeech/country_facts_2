import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountry = createAsyncThunk(
   "countryModal/loadCountries",
    async (countryName) => {
        const response = await fetch(`htpps://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        if (!response.ok) {
            return Promise.reject();
        }
        const data = await response.json();
        return data;
    }
);

export const countryModalSlice = createSlice({
    name: 'countryModal',
    initialState: {
        countryInfo: [],
        isLoadingCountry: false,
        failedToLoadCountry: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountry.pending, (state) => {
                state.isLoadingCountry = true;
                state.countryInfo = false;
            })
            .addCase(loadCountry.fulfilled, (state, action) => {
                state.isLoadingCountry = false;
                state.countryInfo = action.payload;
            })
            .addCase(loadCountry.rejected, (state) => {
                state.isLoadingCountry = false;
                state.failedToLoadCountry = true;
            })
    }
});

export const selectCountryModal = state => {
    return state.countryModal.countryInfo;
};

export const selectCountryModalLoadStatus = state => {
    return state.countryModal.isLoadingCountry;
};

export const selectCountryFailedStatus = state => {
    return state.countryModal.failedToLoadCountry;
};

export default countryModalSlice.reducer;