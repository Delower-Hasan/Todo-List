let input = document.querySelector('input')
let button = document.querySelector('button')
let ul = document.querySelector('ul')
let lis = document.getElementsByTagName('li')
let x =document.getElementsByTagName('span')

let toggle =true;
button.addEventListener('click',function(){
  if(input.value !=''){
    let p = document.createElement('li')
  p.innerHTML = '<span><i class="far fa-trash-alt"></i></span> '+ input.value
  ul.appendChild(p)
  }
   for(let i =0;i<x.length;i++){
   x[i].addEventListener('click',function(){
    this.parentNode.remove()
   })
 }
for(let c=0;c<lis.length;c++){
  lis[c].addEventListener('click',function(){
    if(toggle){
      this.classList.add('read')
      toggle=false;
    }else{
      this.classList.remove('read')
      toggle= true;
    }
  })
}
  
})

 for(let j =0;j<x.length;j++){
   x[j].addEventListener('click',function(){
     this.parentNode.remove()
   })
 }
for(let c=0;c<lis.length;c++){
  lis[c].addEventListener('click',function(){
    if(toggle){
      this.classList.add('read')
      toggle=false;
    }else{
      this.classList.remove('read')
      toggle= true;
    }
  })
}











