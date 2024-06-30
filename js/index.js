// used to store data that will be rendered on some/all web pages
var data = {
    events:[
        {
            name: "Project Presentation",
            startDay: "Tue",
            endDay: "Tue",
            startMonth: "July",
            endMonth: "Aug",
            startDate: 28,
            endDate: 3
        },
        {
            name: "Examination(s)",
            startDay: "Mon",
            endDay: "Fri",
            startMonth: "Aug",
            endMonth: "Aug",
            startDate: 3,
            endDate: 7
        },  
        {
            name: "Esther's 5 Years Anniversary",
            startDay: "Wed",
            endDay: "Wed",
            startMonth: "Aug",
            endMonth: "Aug",
            startDate: 4,
            endDate: 4
        },
        {
            name: "Kemi's 2 Years Anniversary",
            startDay: "Fri",
            endDay: "Fri",
            startMonth: "Aug",
            endMonth: "Aug",
            startDate: 7,
            endDate: 7
        },
        {
            name: "Kola's 6 Years Anniversary",
            startDay: "Thurs",
            endDay: "Thurs",
            startMonth: "Sept",
            endMonth: "Sept",
            startDate: 12,
            endDate: 12
        },
        {
            name: "Pastor Flow's 2 Years Anniversary",
            startDay: "Mon",
            endDay: "Mon",
            startMonth: "Sept",
            endMonth: "Sept",
            startDate: 16,
            endDate: 16
        },
        {
            name: "Wavy's 4 Years Anniversary",
            startDay: "Thurs",
            endDay: "Thurs",
            startMonth: "Sept",
            endMonth: "Sept",
            startDate: 26,
            endDate: 26
        },
        {
            name: "End Of The Year Party",
            startDay: "Sat",
            endDay: "Sat",
            startMonth: "Nov",
            endMonth: "Nov",
            startDate: 30,
            endDate: 30
        }

    ],
    products:[
        {
            imageSrc: "../img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "../img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "../img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "../img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "../img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "../img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "../img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "../img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        }
        
    ]
} 

document.addEventListener('DOMContentLoaded', populateEvents())

// Parse event data
function populateEvents(){
    let eventsData = data.events;
    console.log(eventsData.length);
    
    //get the main events container
    let mainEventContainer = document.getElementById(id="event-list");

    eventsData.forEach(event => {
        let eventsDiv = document.createElement("div"); //create outer div
        eventsDiv.classList.add("events"); // add class name events to the outer div

        let dateIconContDiv = document.createElement("div"); //create div for date icon content
        dateIconContDiv.classList.add("date-icon-cont"); // add class name events to the date icon content div
        let dateIconDiv = document.createElement("div"); //create date icon div
        dateIconDiv.classList.add("date-icon"); // add class name events to the date icon div
        let dateDiv = document.createElement("div"); //create div for date 
        dateDiv.classList.add("date-number"); // add class name events to the date div
        let monthDiv = document.createElement("div"); //create div for month 
        monthDiv.classList.add("date-month"); // add class name events to the month div

        let eventInfoContDiv = document.createElement("div"); //create event info content div
        eventInfoContDiv.classList.add("event-info-content"); // add class name events to the date icon div
        eventInfoContDiv.style.backgroundColor = "greenyellow"; //set background color
        let eventNameDiv = document.createElement("div"); //create div for event name 
        eventNameDiv.classList.add("event-name"); // add class name events to the date div
        let eventPeriodDiv = document.createElement("div"); //create div for event period 
        eventPeriodDiv.classList.add("event-period"); // add class name events to the month div

        //append elements
        dateIconDiv.appendChild(dateDiv);
        dateIconDiv.appendChild(monthDiv);
        dateIconContDiv.appendChild(dateIconDiv);

        eventInfoContDiv.appendChild(eventNameDiv);
        eventInfoContDiv.appendChild(eventPeriodDiv);
        
        eventsDiv.appendChild(dateIconContDiv);
        eventsDiv.appendChild(eventInfoContDiv);

        //create text values
        let dateNum = event.startDate + " - " + event.endDate;
        let eventPeriod = event.startDay + " " + event.startDate + " " + event.startMonth + " - " + event.endDay + " " + event.endDate + " " + event.endMonth; 
        
        //add text content
        dateDiv.textContent = dateNum;
        monthDiv.textContent = event.startMonth;
        eventNameDiv.textContent = event.name;
        eventPeriodDiv.textContent = eventPeriod;
      
        //append event to the main container
        mainEventContainer.appendChild(eventsDiv);
    });
    
}
