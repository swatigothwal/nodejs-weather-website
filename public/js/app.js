console.log('client side javascript')
 
//const weatherform = document.querySelector('form')
//const search = document.querySelector('input')
//const messageone = document.querySelector('#message-1')
//messageone.textContent = 'from javascript'



//const messagetwo = document.querySelector('#message-2')


//weatherform.addEventListener('submit',(e)=>{
  //  e.preventDefault()

   //  console.log('timing !')
   // const location = search.value
   //const location = search.value
   //messageone.textContent = 'loading...'
   //messagetwo.textContent = ' '
   //fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
    //response.json().then((data)=>{
      //     console.log(data)
        //   messagetwo.textContent = data
   
        //if(data.error)
       //{
         //  console.log('plz provide correct location')
            
           //messageone.textContent = data.error
           //console.log(data.error)
           //console.log(data.error)
       //}
       //else{
         //   messageone.textContent = data.address+ ' long. : ' + data.longitude + ' lat. :  ' + data.latitude
           // messagetwo.textContent = data.forecast
//           console.log(locations)
           //console.log(data.longitude)
          // console.log(data.location)
           //console.log(data.address)
            //console.log(data.forecast)
       //}
    //})
//})     
//})

 

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then(response => response.json())
       .then( data => {
              //JSON.parse(JSON.stringify(data))
               if (data.error) {
               // console.log(JSON.parse(JSON.stringify(obj)))
                 //console.log('here is error '+ data.error)
                messageOne.textContent = data.error
                //messageTwo.textContent = data.error
              } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    
})