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
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        },
        {
            imageSrc: "/img/tshirt.jpeg",
            productName: "T Shirt",
            productDescription: "Original by Stitches"
        }
    ]
} 

document.addEventListener("DOMContentLoaded", populateContent);

// Add active class to nav items
function styleNavItems(){
    //get all navigation items
    const navItems = document.querySelectorAll('#navItemsCont a');

    //get the current page URL
    const currentPage = window.location.pathname;

    //loop through each nav item
    navItems.forEach(function(navItem) {
        //if the nav item's href matches the current page URL, add the 'active' class
        if (navItem.getAttribute('href') === currentPage) {
            navItem.classList.add('active');
        }
    });
}

// Load data for each page when the user navigates to that page
function populateContent(){
    //style navigation menu items
    styleNavItems();

    // load products when user is on the showcase page
    if (window.location.pathname.endsWith("/showcase.html")) {
        loadProducts();
    } 
    
    // add submit eventlistener on the appointment form
    if (window.location.pathname.endsWith("/inquiries.html")) {
        validateAndSubmitForm();
    } 
    
    // load events when user is on the events page
    if (window.location.pathname.endsWith("/events.html")) {
        loadEvents();
    } 
}

// Validate and submit form 
function validateAndSubmitForm(){
   //get appointment form
    const apptForm = document.getElementById(id="appointment-form");
    const alert = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alert-message");
    const span = document.getElementsByClassName("close")[0];
    
    //add submit event listener
    apptForm.addEventListener("submit", function(event) {
        //prevent form from submitting before validation
        event.preventDefault();
        
        //get appointment form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const apptDate = document.getElementById("date").value;
        const message = document.getElementById("message").value.trim();
        
        // Validate each field
        let formIsValid = true;
        let errorMessage = "";

        if (name.length == 1 ) {
            formIsValid = false;
            errorMessage += "Name must have at least two letters.\n";

        if (!validateEmail(email)) {
            formIsValid = false;
            errorMessage += "Email is not valid.\n";
        }

        if (message.length <= 10) {
            formIsValid = false;
            errorMessage += "Message must include at least 10 letters.\n";
        }

        if (formIsValid) {
            alertMessage.innerHTML = "Scheduling an appointment for " + name + ".";
            alert.style.display = "block";
            
            //submit form
            apptForm.submit();
            
            alertMessage.innerHTML = "Appointment successfully scheduled for" + apptDate + ".<br>See you then!";
            alert.style.display = "block";
        } else {
            alertMessage.innerHTML = "We are unnable to schedule your appointment because of the following issues:<br><br>" + errorMessage.replace(/\n/g, "<br>") + "<br>Kindly address them and try again.";
            alert.style.display = "block";
        }
    }
    });
    
     span.onclick = function() {
        alert.style.display = "none";
    }

    window.onclick = function(alert) {
        if (event.target == alert) {
            alert.style.display = "none";
        }
    }
}

 // Check if email is fromatted properly   
 function validateEmail(email) {
    // email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Parse event data
function loadEvents(){
    let eventsData = data.events;

    //get the main events container
    let mainEventContainer = document.getElementById(id="event-list");

    eventsData.forEach(event => {
        let eventsDiv = document.createElement("div"); //create outer div
        eventsDiv.classList.add("events"); // add class name events to the outer div

        let dateIconContDiv = document.createElement("div"); //create div for date icon content
        dateIconContDiv.classList.add("date-icon-cont"); // add class name date-icon-cont to the date icon content div
        let dateIconDiv = document.createElement("div"); //create date icon div
        dateIconDiv.classList.add("date-icon"); // add class name date-icon to the date icon div
        let dateDiv = document.createElement("div"); //create div for date 
        dateDiv.classList.add("date-number"); // add class name date-number to the date div
        let monthDiv = document.createElement("div"); //create div for month 
        monthDiv.classList.add("date-month"); // add class name date-month to the month div

        let eventInfoContDiv = document.createElement("div"); //create event info content div
        eventInfoContDiv.classList.add("event-info-content"); // add class name event-info-content to the event info content div
        let eventNameDiv = document.createElement("div"); //create div for event name 
        eventNameDiv.classList.add("event-name"); // add class name event-name to the event name div
        let eventPeriodDiv = document.createElement("div"); //create div for event period 
        eventPeriodDiv.classList.add("event-period"); // add class name event-period to the event peiod div

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

// Parse product data
function loadProducts(){
    let productsData = data.products;

    //get the main products container
    let mainProductContainer = document.getElementById(id="productList");

    productsData.forEach(product => {
        let productDiv = document.createElement("div"); //create outer div
        productDiv.classList.add("product"); // add class name product to the outer div

        let imgDiv = document.createElement("div"); //create div for image
        imgDiv.classList.add("productImage"); // add class name productImage to the img div
        let nameDiv = document.createElement("div"); //create product name div
        nameDiv.classList.add("productName"); // add class name productName to the date icon div


        let img = document.createElement("img"); // create image element
        img.src = product.imageSrc; // add image source
        img.alt = product.productDescription; // add image alt text
        let span = document.createElement("span"); //create span for description
        span.classList.add("productDesc"); // add class name productDesc to the span
        span.textContent = product.productDescription

        //append elements
        imgDiv.appendChild(img);
        nameDiv.innerHTML = product.productName;
        nameDiv.appendChild(span);
        
        productDiv.appendChild(imgDiv);
        productDiv.appendChild(nameDiv);
      
        //append product to the main container
        mainProductContainer.appendChild(productDiv);
    });
}
