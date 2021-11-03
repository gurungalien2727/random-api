import {useState, useEffect} from 'react';

const useFetchUsers = (gender, nationality) =>{
  
    const [results,setResults] = useState([]);
    const [loading, setLoading]= useState(true);
    const [page, setPage]= useState(1);
    const [loadingMoreUsers, setLoadingMoreUsers] =useState(false);
    const [previousGender, setPreviousGender] = useState(gender);
    const [previousNationality, setPreviousNationality] = useState(nationality);

    useEffect(()=>{
        if(gender !== previousGender || nationality!==previousNationality) setLoading(true);
        loadUsers();
      },[page, gender, nationality]);
  
      loadUsers=()=>{
        const URL=`https://randomuser.me/api/?page=${page}&results=10&gender=${gender}&nat=${nationality}`
        fetch(URL)
        .then(response => response.json())
        .then(jsonResponse =>{
          setLoading(false);
          setLoadingMoreUsers(false);
          if(gender === previousGender && nationality === previousNationality  ){
             arr= (page==1) ?jsonResponse.results:[...results, ...jsonResponse.results];
           }
           else{
             arr= jsonResponse.results;
             if(gender!==previousGender)   setPreviousGender(gender);
             if(nationality!==previousNationality)  setPreviousNationality(nationality);
           }
          setResults(arr);
        }
          );
      }

      loadMoreUsers=()=>{
        setLoadingMoreUsers(true);
        setPage(page=>page+1);
      }
      return [loading, loadMoreUsers, loadingMoreUsers, results];
}

export default useFetchUsers;