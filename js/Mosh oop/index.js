// const wifi = {
//     provider: "Dash",
//     speed: "100 Mbps",
//     result(){
//         console.log(`I am using wifi by ${this.provider} which has a speed of ${this.speed}`)
//     }
// };
function WifiDetails (provider, speed){
    this.provider = provider;
    this.speed = speed + " Mbps";
    this.result = function (){
        console.log(`I am using wifi by ${this.provider} which has a speed of ${this.speed}`)   
    }
}

const sahilWifi = new WifiDetails("Dash", "100");