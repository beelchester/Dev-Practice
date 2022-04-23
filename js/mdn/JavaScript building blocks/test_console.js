const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

const random = Math.floor(Math.random()*names.length);
    function chooseName(){
      
        return names[random];
      
     
    }
console.log(chooseName()); 
console.log(random); 