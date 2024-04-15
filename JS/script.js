// Get a reference to the <p> tag
const studentInfo = document.getElementById("student-info");

// Your student ID and name
const studentID = "200551810";
const studentName = "Saksham Mago";

// Set the text content of the <p> tag
studentInfo.textContent = `Student ID: ${studentID} | Name: ${studentName}`;

// Generate Unsplash Source API URLs
const imageURLs = [
    "https://images.unsplash.com/photo-1532484468512-fd9df0aa70f4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/800X600",
    "https://images.unsplash.com/photo-1538387477190-079f913f3251?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Add more image URLs as needed
  ];
  
  // Iterate over the array of image URLs
  imageURLs.forEach(url => {
    // Create an <img> element
    const imgElement = document.createElement("img");
  
    // Set the src attribute of the <img> element to the image URL
    imgElement.src = url;
  
    // Append the <img> element to the document body (you can change this to any other element)
    document.body.appendChild(imgElement);
  });
  



  // Construct the URL for the Unsplash API endpoint
const unsplashAPIURL = `https://api.unsplash.com/photos/random?client_id=9Veyc-Oon61__esruXnpDrozUty5krKcLeK6gaulAaw&count=5`;

// Make a request to the Unsplash API
fetch(unsplashAPIURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    // Log the raw response data
    console.log(data);
    
    // Attempt to parse the JSON data
    const jsonData = JSON.parse(data);

    // Process the response data
    console.log(jsonData);

    // Iterate over the array of image objects
    jsonData.forEach(photo => {
      // Create an <img> element
      const imgElement = document.createElement("img");

      // Set the src attribute of the <img> element to the image URL
      imgElement.src = photo.urls.regular;

      // Append the <img> element to the document body (you can change this to any other element)
      document.body.appendChild(imgElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

 