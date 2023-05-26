const cityForm = document.querySelector('form')
const details = document.querySelector('.details')
const time = document.querySelector('.time')
const icon = document.querySelector('.icon img')

const updateUI=(data)=>{
  
  const citiDetails = data.citiDetails
  const weather = data.weather
//   console.log(weather)

const html = `<h5 class="my-3">${citiDetails.EnglishName} </h5>
<div class="my-3">${weather.WeatherText} </div>
<div class="display-4 my-4">
<span>${weather.Temperature.Metric.Value} </span>
<span> &deg;C</span>
</div>`;

details.innerHTML = html;
//set icon
let iconNumber =`img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src', iconNumber);



// set images
let timeSrc = weather.IsDayTime
let DNimage = '';

if(timeSrc){
    DNimage = 'img/day.svg';
}
else{
    DNimage = 'img/night.svg';
}

time.setAttribute('src', DNimage);
}




const updateCity=async(city)=>{
    const citiDetails =await getCity(city)
    const weather = await getweather(citiDetails.Key);
    return{citiDetails,weather}
}



cityForm.addEventListener('submit', (e)=>{
    e.preventDefault();
const city = cityForm.city.value.trim()
cityForm.reset()
updateCity(city)
.then((data)=>{
     updateUI(data);
 
})
.catch((err)=> {
    console.log(err.message);
})
localStorage.setItem('location', city)  // en m ek key or dusri value, value m upr s variable dal diya h, key kuch v rkh skte h
});

if(localStorage.getItem('location')){

    updateCity(localStorage.getItem('location'))  // ye localstorage s get kr rhe h  
.then((data)=>{
     updateUI(data);
 
})
.catch((err)=> {
    console.log(err.message);
})
}









//     const cityForm = document.querySelector('form');
//     const details = document.querySelector('.details');
//     const time = document.querySelector('.time');
//     const icon = document.querySelector('.icon img');

//     const updateUI=(data)=>{

//     const citiDetails = data.citiDetails
//     const weather = data.weather
//     console.log(weather);

//     const html = `<h5 class="my-3">${citiDetails.EnglishName}</h5>
//     <div class="my-3">${weather.WeatherText}</div>
//     <div class= "display-4 my-4">
//     <span>${weather.Temperature.Metric.Value}</span>
//     <span>&deg;C<span>
//     </div>`;

//     details.innerHTML = html;

//     // set weather Icon
//     const iconNumber = `img/icons/${weather.WeatherIcon}.svg`;
//     icon.setAttribute('src', iconNumber);



//     //set Day and night Image
//     let timeSrc = weather.IsDayTime;
//     if(timeSrc){
//         DNimage = 'img/day.svg';
//     }
//     else{
//         DNimage = 'img/night.svg';
//     }
//     time.setAttribute('src', DNimage);
//     }
    

//     const updateCity= async(city)=>{
//         const citiDetails =await getCity(city)
//         const weather =await getweather(citiDetails.Key)
//         return{citiDetails,weather};
    
//     }



//     cityForm.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const city = cityForm.city.value.trim();
//     cityForm.reset()
//     //  console.log(city);
//     updateCity(city)
//     .then((data)=>{
//     updateUI(data)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     })




// // // project s alg localstorage

// // // localStorage.setItem('name','mantasha');  // set
// // // const local = localStorage.setItem('name', 'umair')   //update k liye
// // // const local1 = localStorage.getItem('name')   // get k liye
// // // // localStorage.clear()   // all clear kr dega
// // // localStorage.removeItem('name'); // remove kr skte h
// // // console.log(local1);






// // // bhut sare likh skte h
// // // localStorage.setItem('name','mantasha')
// // // localStorage.setItem('name1', 'umair');
// // // localStorage.setItem('name2', 'Any');   // aise bhut sare localstorage rkh skte h
// localStorage.clear()












// // // const cityForm = document.querySelector('form');
// // // const detials = document.querySelector('.details')

// // // const updateUI =(data)=>{
// // // const citiDetails = data.citiDetails;
// // // const weather = data.weather;
// // // // console.log(weather);

// // // const html = `<h5 class="my-3">${citiDetails.EnglishName}</h5>

// // // <div class= "my-3">${weather.WeatherText}</div>
// // // <div class="display-4 my-4">
// // // <span>${weather.Temperature.Metric.Value}</span>
// // // <span>&deg;C</span>
// // // </div>`;

// // // detials.innerHTML= html;

// // // }



// // // const updateCity = async(city)=>{
// // //     const citiDetails =await getCity(city);
// // //     const weather =await getweather(citiDetails.Key);
// // //     return{citiDetails,weather};
// // // }


// // //     cityForm.addEventListener('submit', (e)=>{
// // //     e.preventDefault();
// // //     // const city = cityForm.city.value.trim();
// // //     const city = document.getElementById('input').value.trim()
// // //     cityForm.reset();
// // //     updateCity(city) 
// // //     .then(data =>{
// // //       updateUI(data);
     
// // //     })
// // //     .catch(err =>{   
// // //         console.log(err.message)
// // //     })
    
// // //     })















// // // // getCity("delhi")            /*aise all city mil jaygi jitni resource m hongi */
// // // // .then(data=>console.log(data))
// // // // .catch(err => console.log(err.message));


// // // // getweather('202396')
// // // // .then(data=>console.log(data))
// // // // .catch(err=>console.log(err.message));
