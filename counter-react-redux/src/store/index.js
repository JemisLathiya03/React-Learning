import {createStore} from "redux"

const INITIAL_VALUE = {
  count : 0,
  privacy : false
}

const storeReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return {...store,count : store.count+1}
  }else if (action.type === "DECREMENT") {
    return {...store,count : store.count-1}
  }
  else if (action.type === "ADD") {
    return {...store,count : store.count+Number(action.payload.num)}
  }
  else if (action.type === "SUBSTRATE") {
    return {...store,count : store.count-Number(action.payload.num)}
  }else if (action.type === "PRIVACY") {
    return {...store,privacy : !store.privacy}
  }
  
  return store;
}

const store = createStore(storeReducer);

export default store;