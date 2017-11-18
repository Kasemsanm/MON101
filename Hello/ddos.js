const async = require('async')
const request = require('request')
const items = []

const q = async.queue((task,callback) =>{
    request('http://www.kasemsanm.com/index.html',(error,response, body) => {
        console.log('status',response && response.statusCode)
        callback()
    })
},100000)

q.drain = () =>{
    console.log("all item have been process foo")
}

for(i = 0;i < 1000000;i++){
    items.push({number: i})
}
 
q.push(items,(err) =>{
    
})
/*
const async = require('async')
const request = require('request')
const items = []

var fs = require('fs')

const q = async.queue((task,callback) =>{
    fs.writeFile('mn'+task.number+'.txt','this process '+task.number,(err) =>{
        if(err){
            console.log(err)
        }
        callback();
    })
},100)

q.drain = () =>{
    console.log("all item have been process foo")
}

for(i = 0;i < 100;i++){
    items.push({number: i})
}
 
q.push(items,(err) =>{
    console.log("finish process item")
})
*/
