import React from 'react';
import SQLite from 'react-native-sqlite-storage';

export const db = SQLite.openDatabase(
    {
        name: "MainDB",
        location: "default",

    },
    ()=>{},
    error=>{console.log(error)}
);

