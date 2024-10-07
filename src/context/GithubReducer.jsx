import NotFound from "../pages/NotFound";

const githubReducer =(state,action) => {
  switch (action.type){
    case 'GET_USERS':
      return {        
        ...state,
        users:action.payload,
        loading:false
      };
      case 'GET_USER':
        return{
          ...state,
          user:action.payload,
          loading:false
        }
        case'GET_USERREPOS':
        return{
          ...state,
          repos:action.payload,
          loading:false
        }
        case'NOT_FOUND':
            return{
              ...state,
              notFound:true
            }
      case 'SET_LOADING':
        return{
          ...state,
          loading:true
        }
        case 'CLEAR_USERS':
        return {
          ...state,
          users:[]
        }
        case 'GET_USER_AND_REPOS':
          return{
          ...state,
          user:action.payload.user,
          repos:action.payload.repos
          }
    default:
        return state
  }
}
export default githubReducer