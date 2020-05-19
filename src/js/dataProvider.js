import appConstants from "./constant";


export const fetchData = () => {

  return fetch(`${appConstants.API_URL}`).then(resp => {
    const result = resp.json();
    console.log(resp.data,result)
    return result;
  });
};