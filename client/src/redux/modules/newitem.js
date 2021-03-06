//Action Names
   const UPDATE_NEW_ITEM = 'UPDATE_NEW_ITEM'

   const RESET_NEW_ITEM = 'RESET_NEW_ITEM'

   const RESET_NEW_ITEM_IMAGE = 'RESET_NEW_ITEM_IMAGE'

// Action Creators

   const updateNewItem = (item) => {
       return {
           type: UPDATE_NEW_ITEM,
           payload: item
       }  
   };
   const resetNewItem = () => {
       return {
           type: RESET_NEW_ITEM
       }
   };
   const resetNewItemImage = () => {
       return {
           type: RESET_NEW_ITEM_IMAGE
       }
   };

// Reducer

const initialState = {
       title: 'Foo',
       description: 'Foo',
       created: new Date(),
       imageurl: '',
       itemowner: {},
       tags: []
   };

export default (state = initialState , action) => {
   
   switch(action.type) {
       case UPDATE_NEW_ITEM: {
           return {...state, ...action.payload}

       }
       case RESET_NEW_ITEM: {
           return initialState;
       }
       case RESET_NEW_ITEM_IMAGE: {
           return {
               ...state, imagurl: initialState.imageurl
           };
       }
       default: {
           return state;
       }
   }
}
