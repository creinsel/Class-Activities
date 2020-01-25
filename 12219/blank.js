var fs= require('fs');

// fs.writeFile('movies.txt','The Grinch',function(err){
//     if(err){
//         return console.log(err);
//     }
//     console.log(data.split(','))
// })

// fs.readFile('activityOne','utf8', function(err, data){
//     if(err){
//         return console.log(err);
//     }
//     // console.log(data.split(','));

// var content= data.split(',');

// content.forEach(function(element){
//     console.log(element);
// })
// })

fs.appendFile('movies.txt', ',John Wick', function(err){
    if (err){
        return console.log(err);
    }
    console.log('something was added')
})