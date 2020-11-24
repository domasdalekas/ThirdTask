const initialState ={
    ads:[],
};
export const adReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'SHOW_ALL' : 
        return {
            ads: [...state.ads],
        }
        case 'ADD_AD':
        return  {
                ads:[ 
                    ...state.ads,
                    {
                    name:action.name,
                    text:action.text,
                    id:action.id,
                },
                ],
            }
        case 'DELETE_AD':
        const index=state.ads.findIndex((ad)=>ad.id===action.id)
        return {
                    ads: [
                        ...state.ads.slice(0,index),...state.ads.slice(index+1)
                    ],
                }
        case 'EDIT_AD':
                    const index1 = state.ads.findIndex((ad) => ad.id === action.id);
                  
                      return Object.assign({}, state, {
                        ads: state.ads.map(ad => {
                          if (ad.id !== action.id) {
                            return ad
                          }
          
                          return Object.assign({}, ad, {
                            name: action.name,
                            text: action.text,
                            id: action.id,
                          })
                        })
                      })       
        default :
        return state;
    }
}
