const fs = require('fs'); // required to get the file system

var fetchedData = {}; // used to store data that will be rendered on some/all web pages


document.addEventListener('DOMContentLoaded', 
    ()=>{
        console.log("Loaded");
    }
    )

// loading data to display after DOM completes loading
document.addEventListener('DOMContentLoaded', 
    fetchContentData('../data/items.json')
    .then(data =>
    {
        fetchedData = data;
        console.log(JSON.stringify(data));
    })
    .catch(error => {
        console.log(error);
    })
)
//Function for getting the raw data from a file. 
//It assumes the data is in JSON format
//It takes a parameter, file path of type string 
function fetchContentData(path){
    //making a callback to handle the response of the file read and data parsing
    return new Promise((ftw, wth) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if(error){
                wth(error);
            } else {
                ftw(data);
            }
        })
    })
}
