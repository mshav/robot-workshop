var robot = document.querySelectorAll('.light');
var textbox = document.querySelector('#input');


textbox.addEventListener('change',function(){
  // console.log(robot)
var time = textbox.value;

robot[0].classList.remove('off');
robot[1].classList.remove('off');
robot[2].classList.remove('off');



if(time < 10){
  robot[0].classList.add('off');
 // robot[1].classList.add('off');
}

else if(time > 20){
robot[1].classList.add('off');
// robot[2].classList.add('off');
}
else if(time > 30){
// robot[0].classList.add('off');
 robot[2].classList.add('off');
 }
else {
robot[0].classList.add('off');
robot[1].classList.add('off');
robot[2].classList.add('off');

}
textbox.value = "";
});
