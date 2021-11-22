import {useState, useEffect, useReducer} from 'react';

function reducer(state, action){
switch(action.type){
  case 'page':
    return {...state, page: action.payload};
  case 'gender':
    return {...state, previousGender: action.payload};
  case 'nationality':
    return {...state, previousNationality: action.payload};
  default:
    throw new Error();
}
}

const useFetchUsers = (gender, nationality) =>{

    const [results,setResults] = useState([]);
    const [loading, setLoading]= useState(true);
    const [loadingMoreUsers, setLoadingMoreUsers] =useState(false);
    const [params, dispatch] = useReducer(reducer, {
      page:1,
      previousGender:gender,
      previousNationality:nationality,
    });

    useEffect(()=>{
        if(gender !== params.previousGender || nationality!==params.previousNationality) setLoading(true);
        loadUsers();
      },[params.page, gender, nationality]);
  
      loadUsers=()=>{
        const URL=`https://randomuser.me/api/?page=${params.page}&results=10&gender=${gender}&nat=${nationality}`
        fetch(URL)
        .then(response => response.json())
        .then(jsonResponse =>{
          setLoading(false);
          setLoadingMoreUsers(false);
          if(gender === params.previousGender && nationality === params.previousNationality  ){
             arr= (params.page==1) ?jsonResponse.results:[...results, ...jsonResponse.results];
           }
           else{
             arr= jsonResponse.results;
             if(gender!== params.previousGender)  {
              dispatch({type: 'gender', payload:gender})
             }
             if(nationality!== params.previousNationality)  dispatch({type: 'nationality', payload:nationality})
           }
          setResults(arr);
        }
          );
      }
      loadMoreUsers=()=>{
        setLoadingMoreUsers(true);
        dispatch({type: 'page', payload: params.page + 1});
      }
      return [loading, loadMoreUsers, loadingMoreUsers, results];
}

export default useFetchUsers;