const key = '0uncLOEi4BbZHcWesOxm3YW5niBfyFKY';
const getCity=async(city)=>{

  const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  

const query = `?apikey=${key}&q=${city}`;
const response =await fetch (baseUrl + query);
const data =await response.json();
// console.log(data[0]);
if(data.length == 0){
  throw new Error ("This city does not exist.")
}

return (data[0]);


}


 

// Get weather condition
const getweather=async(id)=>{
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response =await fetch (base + query);
  const data =await response.json()
  return(data[0]);
}












// const key = '	lITjhyoEYT0yOiffgxhn3tXT9inVi3H1';
// const getCity= async(city)=>{
//   const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//   const query = `?apikey=${key}&q=${city}`
//   const response =await fetch (baseUrl + query);
//    const data = await response.json()
//    if(data.length == 0){
//     throw new Error ("this city does not exist..")
//    }
//    return(data[0]);
// }



// const getweather = async(id)=>{
//   const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//   const query = `${id}?apikey=${key}`;

//   const response =await fetch(base + query);
//   const data =await response.json();
//   return(data[0]);
// }














// // // const key = '42u5y9CCGiwmrjETvb9ntrufnArQciJT';
// // // const getCity= async(city)=>{
// // //   const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
// // //   const query = `?apikey=${key}&q=${city}`; 

// // //  const response =await fetch(baseUrl + query)
// // //  const data = await response.json();
// // // //  console.log(data);
// // //  if(data.length == 0){
// // //   throw new Error("This city does not exits..");
// // //  }
// // //  return(data[0])
// // // }


// // // // // Get weather Condition

// // // const getweather = async(id)=>{
// // //  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
// // //  const query = `${id}?apikey=${key}`;

// // //  const response = await fetch (base+query);
// // //  const data =await response.json();
// // //  return(data[0]);
// // // }



// // // // Get weather Condition
// // // const getweather =async (id)=>{
// // //   const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

// // //   const query = `${id}?apikey=${key}`;
// // //   const response =await fetch(base + query)
// // //   const data = await response.json();
// // //   return(data[0]);

// // // }
  
// // // // getweather('202396')
// // // // .then(data=>console.log(data))
// // // // .catch(err=>console.log(err.message));

