import {useState} from 'react';
import {useEffect} from 'react';

//using setTimeout to simulate a api request


function useLocaleStorage(itemName, initValue){

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initValue);

  useEffect(() => {
    try{
        
      setTimeout(() => {
        let localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){ // if it's empty then create it with a initValue
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parsedItem = initValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
        
        setItem(parsedItem);
        setLoading(false);

      }, 1000);


    }catch(err){
      setError(true);
    }

  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    error,
    loading,
  };

}

export { useLocaleStorage };