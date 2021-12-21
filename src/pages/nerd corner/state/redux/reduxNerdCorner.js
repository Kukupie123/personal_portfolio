import { createStore } from 'redux';


const initState = {
    navIndex: 0
}

const navIndexREDUCER = (state = initState, action) => {
    switch (action.type) {
        case "changeIndex":
            //only index key value will change
            return {
                ...state,
                navIndex: action.navIndex
            };
        default:
            return {...state};

    }
}

export const store = createStore(navIndexREDUCER);


