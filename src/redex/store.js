import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";

const store = configureStore({      

    reducer:{
        newss : newsSlice ,
    }
});

export default store;