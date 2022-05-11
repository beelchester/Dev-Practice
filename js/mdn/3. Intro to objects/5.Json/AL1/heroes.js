
async function populate() {
//fetch API
// This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.

    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const request = new Request(requestURL);
        // The Request interface of the Fetch API represents a resource request.
        // it is a constructor provided by fetch api

    const response = await fetch(request);
    // The global fetch() method starts the process of fetching a 
    // resource from the network, returning a promise which is fulfilled 
    // once the response is available. 
    // we make the network request using the fetch() function, and this returns a Response object
    // The Response interface of the Fetch API represents the response to a request.

    const superHeroes = await response.json();
// We retrieve the response as JSON using the json() function of the Response object.
// console.log(superHeroes)
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
    // The fetch() API is asynchronous (next module abt it)
    // we need to add the keyword async before the name of the function that uses the fetch API, and add the keyword await before the calls to any asynchronous functions.
}
function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['squadName']; 
  //squadName property of the object
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${obj['homeTown']} // Formed: ${obj['formed']}`;
  header.appendChild(myPara);
}
function populateHeroes(obj){
    const section = document.querySelector('section');
    const heroes = obj['members'];

    for (const hero of heroes) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
}
}
populate()
