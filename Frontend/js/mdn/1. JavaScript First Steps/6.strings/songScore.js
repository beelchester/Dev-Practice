const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s1Sc = document.querySelector('#s1Sc');
const s2Sc = document.querySelector('#s2Sc');
const s3Sc = document.querySelector('#s3Sc');
const btn = document.querySelector('#btn');
const result = document.querySelector('#resultSum');
// const rank = document.querySelector('#rank');
btn.onclick = () =>{
    // document.querySelector('.init').style.display = "none";
    result.setAttribute('style', 'white-space: pre;');
    result.textContent=`Result: \n
    ${s1.textContent} scored : ${s1Sc.value} \n
    ${s2.textContent} scored : ${s2Sc.value} \n
    ${s3.textContent} scored : ${s3Sc.value}`
  
    
}
