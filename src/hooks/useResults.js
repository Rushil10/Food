import {useEffect,useState} from 'react';
import yelp from '../api/yelp'

export default () => {
  const [results,setResults]=useState([]);
  const [errorMessage,setErrorMessage]=useState('');

  const searchApi = async(searchTerm) => {
    console.log("Hi")
    try {
      const response=await yelp.get('/search',{
        params:{
          limit:50,
          term:searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses)
    } catch (err) {
      console.log(err)
      setErrorMessage('Something Went Wrong')
    }
  }
  useEffect(() => {
    searchApi('salad');
  },[]);

  return [searchApi,results,errorMessage];
}