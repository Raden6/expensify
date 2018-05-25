
import {createStore} from 'redux';

// Action generators - function that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({ // here we have 2 default values: 1 and empty object {}
    type: 'INCREMENT',
    incrementBy
});

const decrementCout = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCont = ( {count} ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state={count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET': 
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

// subscribe is called whenever there is a change in the store
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// its an Action OBJECT
store.dispatch( incrementCount({incrementBy: 5}) );

store.dispatch(resetCount());

store.dispatch(decrementCout());

store.dispatch(decrementCout({decrementBy: 10}));

store.dispatch(setCont({count: 101}));
