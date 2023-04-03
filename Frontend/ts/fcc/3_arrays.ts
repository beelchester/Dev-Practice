const superHeroes: string[] = []; 
// const superHeroes: Array<string> = []; // same as above but with generic type

superHeroes.push('Batman');

type User1 = {
    name: string,
    age: number,
    isMale: boolean,
}

const users: User1[] = [];
// const users: Array<User1> = []; // same as above but with generic type
users.push({ name: 'John', age: 30, isMale: true });

const MLModels : number[][] = []; // 2D array i.e. array of arrays
// const MLModels : Array<Array<number>> = []; // same as above but with generic type
MLModels.push([1,2,3,4,5,6,7,8,9,10]);
console.log(MLModels); // [[1,2,3,4,5,6,7,8,9,10]]

const MLModels2 : number[][][] = []; // 3D array i.e. array of arrays of arrays

