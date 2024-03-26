import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {
  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })



   const getFetch = async () => {
  
        setState({
          ...state,
          isLoading:true,
        })
  
        const resp = await fetch(url);
        console.log("UseFetch url:",url);
        const data = await resp.json();

        console.log("UseFetch recupera:",data);
        setState({
          data:data,
          isLoading:false,
          hasError:null,
        })
   }

   useEffect(() => {
     getFetch();
   
   }, [url])
   
  
    return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,

    };
}
