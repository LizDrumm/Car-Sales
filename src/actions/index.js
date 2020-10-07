//action suite(not industry terminology)

//1.action types
//2.action creaters
//3.action objects


export const ADD_FEATURES = 'ADD_FEATURES';

export const addFeatures = (feature) => {
    return {
        type: ADD_FEATURES,
        payload: feature
    };
};

export const REMOVE_FEATURES = 'REMOVE_FEATURES';

export const removeFeatures = (feature) => {
    return {
        type: REMOVE_FEATURES,
        payload: feature
    };
};