// JSON is a text-based data format following JavaScript object syntax
// It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)
// it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.
// JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue — JavaScript provides a global JSON object that has methods available for converting between the two.
// Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.

// A JSON string can be stored in its own file, which is basically just a text file with an extension of .json, and a MIME type of application/json.
// You can include the same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals.




const superHeroes = {
    "squadName" : "Super hero squad",
    "homeTown" : "Metro City",
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [ //array
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
      "powers" : [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
        ] //array inside array
      },
      {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name" : "Eternal Flame",
        "age" : 1000000,
        "secretIdentity" : "Unknown",
        "powers" : [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  // If we loaded this string into a JavaScript program, parsed it into a variable called superHeroes for example, we could then access the data inside it using the same dot/bracket notation 
superHeroes.homeTown
superHeroes['active']
superHeroes['members'][1]['powers'][2]

// We can also convert arrays to/from JSON. Below is also valid JSON, for example:
const arrJson = 
[
  {
          "name": "Molecule Man",
          "age": 29,
          "secretIdentity": "Dan Jukes",
          "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
          ]
        },
        {
          "name": "Madame Uppercut",
          "age": 39,
          "secretIdentity": "Jane Wilson",
          "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
          ]
        }
      ]
      
      [0]["powers"][0]
      
    //   Other notes

    // JSON is purely a string with a specified data format — it contains only properties, no methods.
    // JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
    // Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like JSONLint.
    // JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be valid JSON.
    // Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.

      // ! checkout AL1 before proceeding
  
      // The above example was simple in terms of accessing the 
      // JavaScript object, because we converted the network response 
      // directly into a JavaScript object using response.json().
      // But sometimes we aren't so lucky — sometimes we receive a 
      // raw JSON string, and we need to convert it to an object 
      // ourselves. And when we want to send a JavaScript object across 
      // the network, we need to convert it to JSON (a string) before 
      // sending.
      // built-in JSON object is available in browsers, which contains
      //  the following two methods:

    // parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
    // stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.

    // we retrieve the response as text rather than JSON, by calling the text() method of the response
    // we then use parse() to convert the text to a JavaScript object.

async function populate() {

  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);

}

// stringify() works the opposite way.
let myObj = { name: "Chris", age: 38 };
// myObj
let myString = JSON.stringify(myObj);
// myString
// "{\"name\":\"Sahil\",\"age\":20}" 
