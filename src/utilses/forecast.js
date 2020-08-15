//const request = require('request')
//const forecast = (latitude,longitude,callback)=>
//{
    //const url = 'http://api.weatherstack.com/current?access_key=b0561ee9fb226ea2d8325f488f7908f1&query=' + latitude +',' + longitude +'&units=s'
    //request({url , json : true},(error,{body}={})=>{
        //if(error)
        //{
          //    callback("unable to connect !",undefined)    
        //}else if(body.error)
        //{ 
          //   callback("unable to find location",undefined)
        //}else{ 
        //callback(undefined,response.body.current)
      //   callback(undefined,'it is currenty '+ body.current.temperature + 'out and ther is ' + body.current.cloudcover + 'chance of rain')
        //  const temp ="it is currenty "+ body.current.temperature + "out and ther is " + body.current.cloudcover + "chance of rain" 
          //return temp
    //    }
  //      })
//}
//module.exports = forecast 






const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=b0561ee9fb226ea2d8325f488f7908f1&query=' + latitude +',' + longitude +'&units=s'
  
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback(body.error)
        } else {
            callback(undefined,   'It is currenty '+ body.current.temperature + ' out and ther is ' + body.current.cloudcover + ' % chance of rain !')
        }
    })
}

module.exports = forecast