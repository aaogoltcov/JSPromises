'use strict'

import GameSavingLoader from './GameSavingLoader';

let data = GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
    return saving;
}, (error) => {
    // error
    throw new Error(error);
});

console.log(data.then((data) => { console.log(data) }));
