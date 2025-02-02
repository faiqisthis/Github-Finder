import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    user:{},
    repos:[],
    loading: false,
    notFound:false
  };
  const [state, dispatch] = useReducer(githubReducer, initalState);



 

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
