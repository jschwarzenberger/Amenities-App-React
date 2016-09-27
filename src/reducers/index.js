import { combineReducers } from 'redux';
import AmenitiesReducer from './reducerAmenities';
import LocationReducer from './reducerLocation';
import CategoryReducer from './reducerCategory';

const rootReducer = combineReducers({
    amenities: AmenitiesReducer,
    location: LocationReducer,
    category: CategoryReducer
});

export default rootReducer;
