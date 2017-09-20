/*
* @Author: dell
* @Date:   2017-09-20 19:38:33
* @Last Modified by:   dell
* @Last Modified time: 2017-09-20 23:39:32
*/
window.onload = function(){
	let box = document.getElementsByClassName('box')[0];
	let height = box.offsetHeight;
	let width = box.offsetWidth;
	let top = box.offsetTop;
	let left = box.offsetLeft;
	let h = innerHeight-height;
	let w = innerWidth-width;
	let speed = 3;
	let speeds = 3;

	let t = setInterval(move, 25);https://zyyyyhhh.github.io/9-20/
	function move(){
		top+=speed;
		left+=speeds;
		box.style.top = top+'px';
		box.style.left = left+'px';
		if(top>=h){
			speed*=-1;
		}
		if(top<=0){
			speed*=-1;
		}
		if(left>=w){
			speeds*=-1;
		}
		if(left<=0){
			speeds*=-1;
		}

		box.onmouseover = function(){
			clearInterval(t);
		}
		box.onmouseout = function(){
			t = setInterval(move, 25);
		}



		
	}
}