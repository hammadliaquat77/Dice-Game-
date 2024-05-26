
var life = 10

document.getElementById('btn').addEventListener('click',function(){


if (life <= 0) {
    document.getElementById('value1').value = 'Game Over'
    // return;
}
else{
    life--;
    document.getElementById('lives').value = 'Lives: ' + life;
    }
    
        
        
var dice = Math.ceil(Math.random()*6)
console.log(dice);
var user =document.getElementById('value').value 
        
for (var i = 1; i <= 6; i++) {
document.getElementById('box' + i).style.backgroundColor = '';
document.getElementById('box' + i).style.color = '';
}



if (user == dice) {
    document.getElementById('value1').value = 'Congrajulation you are win';
    document.getElementById('box' + dice).style.backgroundColor = 'green';
    document.getElementById('box' + dice).style.color = 'white';
        
    }
    else{
    document.getElementById('value1').value = 'Please Try Again'
    document.getElementById('value1').style.textAlign ='center' 

}


switch (dice) {
    case 1:
    document.getElementById('img').src='image/1.png'
    break;
        
    case 2:
    document.getElementById('img').src='image/2.png'
    break;
            
    case 3:
    document.getElementById('img').src='image/3.png'
    break;      
                
    case 4:
    document.getElementById('img').src='image/4.png'
    break;      
                                
    case 5:
    document.getElementById('img').src='image/5.png'
    break;      
                        
    case 6:
    document.getElementById('img').src='image/6.jpg'
    break;      
    }
                        
                     
    });
          












