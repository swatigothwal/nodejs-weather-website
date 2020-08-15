/*const path= require('path')
const express = require('express')
//const hbs = require('hbs')
const app = express()

//define path for express config
const publicdirectorypath = path.join(__dirname,'../public') 
const viewspath = path.join(__dirname,'../templates')

app.set('view engine','hbs')
app.set('views',viewspath)

//setup static directory to serve
app.use(express.static(path.join(publicdirectorypath)))

//app.get('',(req,res)=>{
  //   res.send('hello express !')

 //})

 //setup handelbar engine and viewlocation 
app.get('',(req,res)=>{  //get gives route for the other file/directory
    res.render('index',{
        title : 'andrew',
        name : 'swati'
    })
})
app.get('/help',(req,res)=>{  //get gives route for the other file/directory
    res.render('help',{
        helptext : 'this is some helpful text .'
    })
}) 
//app.get('/help',(req,res)=>{
  //   res.send('this is help..')
// })
 //app.get('/about',(req,res)=>{
  //  res.send('this is about..')
//})
//app.get('/weather',(req,res)=>{
  //  res.send('this is weather..')
//})

 app.listen(3000,()=>{
     console.log('this is on port 3000....')
 })
*/
















const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./utilses/geocode')
const forecast = require('./utilses/forecast')
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialspath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialspath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'swati'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'swati'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title : 'help',
        name : 'swati'
      })
})

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.send({
            error : "plz provide address"
        })
    }
   geocode(req.query.address,(error,{location,latitude,longitude}={})=>{
        if(error)
        {
          return res.send({error})
        }
      forecast(latitude,longitude,(error,forecastdata)=>{
         //if(error){
          // return res.send(error)
         //}
         //else
         res.send({
            //title : 'weather',
            //forecast: 'It is snowing',
              location: location,
              //name : 'swati',
              latitude : latitude,
              forecast : forecastdata,
              longitude : longitude,
              //temp : forecast.temp,
              address : req.query.address
          })
        
        })  
     })
})
app.get('/products',(req,res)=>{
    if(! req.query.search)
    {
       return  res.send({
            error :"must pass search" })
    }
    console.log(req.query.search)
    res.send({
        products : []
    })
})
app.get('/help/*',(req,res)=>{
  //res.send('help article not found')
       res.render('404',{
           errormsg : 'help artivle not found',
           name : 'swati'
       })
})
app.get('*',(req,res)=>{
  //   res.send('error 404')
      res.render('404',{
          errormsg : 'page not found',
          name : 'swati'
        })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
