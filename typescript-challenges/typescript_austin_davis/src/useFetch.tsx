  //----------------------------------------------------------
    // Generics
    //----------------------------------------------------------
    /*
    Generic functions can work with mutliple different data types instead of just one 
    Not native to JS but TS has them 
    */

import { useState, useEffect } from "react";
// use <T> as an indication type is coming, you could write anything but T is convention 
   export function useFetch<T>(url: string):T | null {
    // data will adapt to whatever type we are passing in when component consumed due to <T> here
    // <T> represents the data we're fetching from this mock API
    const [data, setData] = useState<T | null>(null);
   

   useEffect(()=> {
    async function fetchData() {
        let response = await fetch(url)
        let jsonData:T = await response.json()
        setData(jsonData)
    }
    fetchData()
   }, [url])

   return data;
}