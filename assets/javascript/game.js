//define global variables and arrays
var wins = 0; // counter for wins
var lost = 0; // counter for losses
var attempts = 12; // counter to keep the number of user inputs
var citiesGuessedList = new Array(); // list of city guessed by user
var currentCity = ""; // current city from the random generator
var charEntered = new Array(); // stores the characters entered by user
var cityDetails = new Array(); // array to hold city details
var displayCityLetters = "";

//rules for the hangman

function getCity(){
    if(citiesGuessedList.length === cityTheme.cityCount()){
        return "Game End! Refresh/reload Browser";
    }
    else{
        reset();
        cityDetails = cityTheme.nextCity();
        currentCity = cityDetails[0];
    
        //for loop to check the current city is not in Cities Guessed List
        for(var i=0; i<citiesGuessedList.length; i++){
            if(currentCity === citiesGuessedList[i]){
                cityDetails = cityTheme.nextCity();
                currentCity = cityDetails[0];
                i = 0;
            }
        }//end of for loop
        //to display a city
        
        for(var i=0; i < currentCity.length; i++){
            displayCityLetters = displayCityLetters + "_";
        }
        return displayCity();    

    }
}//end of getcity

function displayCity(){
    var temp = "";
    for(var i=0; i < displayCityLetters.length; i++){
        temp = temp + displayCityLetters.charAt(i) + " ";
    }
    return temp;
}

// reset for next city - reset all variable expect for win/loss and cities guess
function reset(){
    displayCityLetters="";
    currentCity="";
    attempts=12;
    charEntered = new Array();
    cityDetails = new Array();
}

function winLoss(){
    if(displayCityLetters === currentCity){
        wins++;
        citiesGuessedList[citiesGuessedList.length]=currentCity;
        return 1; //Game won
    }
    if(attempts === 0){
        lost++;
        return 2; // Game lost
    }
    else{
//      return displayCity(); //Game Continue
        return 0; //Game Continue
    }
}


//Function to get user key input
function userInput(userGuess){
    //check if user has already type the character
    if(userGuess.length ===1 && /[a-z]/.test(userGuess)){
        for(var i=0; i< charEntered.length; i++ ){
            if(charEntered.charAt(i) === userGuess){
                return winLoss();
            }
        }
        for(var j=0; j < currentCity.length; j++){
            if(userGuess===currentCity.charAt(j))
            {
                displayCityLetters = displayCityLetters.substr(0,j) + userGuess + displayCityLetters.substr(j+1);
            }
        }
        charEntered = charEntered + userGuess + ", ";
        attempts--;
        return winLoss();    
    }
}


var cityTheme = {
    cityActNames: ["Chicago", "New York", "Miami", "Los Angeles", "San Fransico", "Dallas", "Boston", "Las Vegas","Phoenix", "Houston", "Denver","Detroit"],
    cityNames: ["chicago", "newyork", "miami", "losangeles", "sanfransico", "dallas", "boston", "lasvegas","phoenix", "houston", "denver","detroit"],
    cityText: ["Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works",
                        "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square. ",
                        "Miami is an international city at Florida's southeastern tip. Its Cuban influence is reflected in the cafes and cigar shops that line Calle Ocho in Little Havana. On barrier islands across the turquoise waters of Biscayne Bay is Miami Beach, home to South Beach. This glamorous neighborhood is famed for its colorful art deco buildings, white sand, surfside hotels and trendsetting nightclubs.",
                        "Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes.",
                        "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.",
                        "Dallas, a modern metropolis in north Texas, is a commercial and cultural hub of the region. Downtown’s Sixth Floor Museum at Dealey Plaza commemorates the site of President John F. Kennedy’s assassination in 1963. In the Arts District, the Dallas Museum of Art and the Crow Collection of Asian Art cover thousands of years of art. The sleek Nasher Sculpture Center showcases contemporary sculpture.",
                        "Boston is Massachusetts’ capital and largest city. Founded in 1630, it’s one of the oldest cities in the U.S. The key role it played in the American Revolution is highlighted on the Freedom Trail, a 2.5-mile walking route of historic sites that tells the story of the nation’s founding. One stop, former meeting house Faneuil Hall, is a popular marketplace.",
                        "Las Vegas, in Nevada’s Mojave Desert, is a resort city famed for its vibrant nightlife, centered around 24-hour casinos and other entertainment options. Its main street and focal point is the Strip, just over 4 miles long. This boulevard is home to themed hotels with elaborate displays such as fountains synchronized to music as well as replicas of an Egyptian pyramid, the Venetian Grand Canal, and the Eiffel Tower.",
                        "Phoenix is the capital of the southwestern U.S. state of Arizona. Known for its year-round sun and warm temperatures, it anchors a sprawling, multicity metropolitan area known as the Valley of the Sun. It's known for high-end spa resorts, Jack Nicklaus–designed golf courses and vibrant nightclubs. Other highlights include the Desert Botanical Garden, displaying cacti and numerous native plants.",
                        "Houston is a large metropolis in Texas, extending to Galveston Bay. It’s closely linked with the Space Center Houston, the coastal visitor center at NASA’s astronaut training and flight control complex. The city’s relatively compact Downtown includes the Theater District, home to the renowned Houston Grand Opera, and the Historic District, with 19th-century architecture and upscale restaurants.",
                        "Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its collection of indigenous works, and the mansion of famed Titanic survivor Molly Brown. Denver is also a jumping-off point for ski resorts in the nearby Rocky Mountains.",
                        "Detroit is the largest city in the midwestern state of Michigan. Near Downtown, the neoclassical Detroit Institute of Arts is famed for the Detroit Industry Murals painted by Diego Rivera, and inspired by the city’s ties to the auto industry, giving it the nickname Motor City. Detroit is also the birthplace of Motown Records, whose chart-topping history is on display at their original headquarters, Hitsville U.S.A."],
    cityImages: ["assets/images/chicago.jpg","assets/images/newyork.jpg","assets/images/miami.jpg","assets/images/losangeles.jpg","assets/images/sanfransico.jpg","assets/images/dallas.jpg","assets/images/boston.jpg","assets/images/lasvegas.jpg","assets/images/phoenix.jpg","assets/images/houston.jpg","assets/images/denver.jpg","assets/images/detroit.jpg"],

    nextCity: function(){
        var rand = Math.floor(Math.random() * this.cityNames.length);

        var cityInfo = new Array();
        cityInfo[0] = this.cityNames[rand];
        cityInfo[1] = this.cityText[rand];
        cityInfo[2] = this.cityImages[rand];
        cityInfo[3] = this.cityActNames[rand];        
        
        return cityInfo;
    },

    cityCount: function(){
        return this.cityNames.length;
    }

}; // end of cityTheme object


