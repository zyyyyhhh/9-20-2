/*
* @Author: dell
* @Date:   2017-09-18 18:46:17
* @Last Modified by:   dell
* @Last Modified time: 2017-09-20 19:35:32
*/
window.onload = function(){
	let a = document.getElementsByClassName('aside1')[0];
	let b = a.getElementsByTagName('li');
	let c = document.getElementsByClassName('item');
	let d = document.getElementsByClassName('bein1')[0];
	let e = d.getElementsByTagName('li');
	let f = document.getElementsByClassName('bein-center')[0];
	let g = f.getElementsByTagName('li');
	let beijing = document.getElementsByClassName('beijing1')[0];


	for(let i=0;i<c.length;i++){
		b[i].onmouseover = function(){
			c[i].style.display = 'block';
		}
		b[i].onmouseout = function(){
			c[i].style.display = 'none';
		}
	}


	for(let i=0;i<g.length;i++){
		g[i].onmouseover = function(){
			for(let i=0;i<g.length;i++){
				g[i].style.background = 'rgba(161, 164, 166, 0.5)';
				g[i].style.borderColor = 'rgba(161, 164, 166, 0.5)';
				animate(e[i],{opacity:0});

			}
				g[i].style.background = 'rgba(255, 255, 255, 0.6)';
				g[i].style.borderColor = 'red';
				animate(e[i],{opacity:1},function(){
					flag = true;
				});
				num = i;
		}
	}


	g[i].onmouseover = function(){
		if(!flag){
			return;
		}
		move();
		flag = true;
	}



	let t;
	t = setInterval(move, 3000);
	let num = 0;
	function move(){
		num++;
		if(num == e.length){
			num = 0;
		}
		for(let i=0;i<e.length;i++){
			animate(e[i],{opacity:0});
			g[i].style.background = 'rgba(161, 164, 166, 0.5)';
			g[i].style.borderColor = 'rgba(161, 164, 166, 0.5)';
		}
		animate(e[num],{opacity:1});
		g[num].style.background = 'rgba(255, 255, 255, 0.6)';
		g[num].style.borderColor = 'red';
	}


		beijing.onmouseover = function(){
			clearInterval(t);
		}
		beijing.onmouseout = function(){
			t = setInterval(move, 3000);
		}
	
}