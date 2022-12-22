// npm init to initialize package.json file

const heroes = require('superheroes')
const villains = require('supervillains')

let hero = heroes.random()
let villain = villains.random()
console.log(villain,"hates",hero)