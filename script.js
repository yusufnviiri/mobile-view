const menu11=document.querySelector('#menu1');
const menu3=document.querySelector('#menu3');
const noMenu=document.querySelector('#noMenu');
const nomenu1=document.querySelector('.noMenu');
const nomenu2=document.querySelector('.noMenu1');
const nomenu3=document.querySelector('.noMenu2');
const nomenu4=document.querySelector('.noMenu3');
const wrap = document.querySelector('.wrapper1');


nomenu1.addEventListener('click',close); 
nomenu2.addEventListener('click',close); 
nomenu3.addEventListener('click',close); 
nomenu4.addEventListener('click',close); 
 
noMenu.addEventListener('click',close); 
 
function theme(){    
    menu3.style.display='flex';
    mainMenu.style.top = '0'; 
       
}