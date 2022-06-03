// import person from "./importExport2";
// or
// ! as it is deafult we can change the name of that for this file
import prs from "./importExport2.js"; 
console.log(prs.name)

// ! To import specific things we use {} :
import { baseData } from "./importExport3.js";
// import { clean } from "./importExport3.js";
// * for changing the name we can
import { clean as cln} from "./importExport3.js";

// ! To import everything from a file
import * as evrthng from "./test.js";