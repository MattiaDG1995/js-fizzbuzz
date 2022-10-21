let ul = document.getElementById('list');
let li = document.createElement('li');
ul.append(li);

for( let x=1; x<=100; x++ ){
    if( (x % 3 == 0) && (x % 5 == 0) ){ 
        
         li.innerHTML += '<li>BuzzFizz</li>';
         console.log('Buzzfizz')

    } else if( x % 5 == 0 ){

        li.innerHTML += '<li>Buzz</li>';
        console.log('buzz')

    } else if( x % 3 == 0){

        li.innerHTML  += '<li>Fizz</li>'; 
        console.log('fizz')

    } else {

        li.innerHTML  += `<li>${x}</li>`;
        console.log(x)

    }    
}