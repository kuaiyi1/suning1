{
	let imgs=document.querySelectorAll(".banner-middle-middle  li");
	let pagers=document.querySelectorAll(".banner-yuanqiu-item li");
	let banner=document.querySelector(".banner-middle-middle");
	let next=document.querySelector(".banner_rbtn");
	let pre=document.querySelector(".banner_lbtn");
	// console.log(imgs);
	// console.log(pagers);
	// console.log(banner);
	// console.log(next);
	// console.log(pre);
	
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
				for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				this.classList.add("active");
				imgs[index].classList.add("active");
				n=index;
		}
	});
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		// n=n%3;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1
		}
		for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[n].classList.add("active");
				pagers[n].classList.add("active");
	}
	// onmouseover//鼠标进入
	// onmouseenter /鼠标进入
	// onmouseseleave //鼠标离开事件
		banner.onmouseenter=function(){
			clearInterval(t);
		}
		banner.onmouseleave=function(){
			t=setInterval(move,3000);
		}
		var flag=true;
		next.onclick=function(){
			if(flag){
				flag=false;
	move();}
}
pre.onclick=function(){
	if(flag){
		flag=false;
	n-=2;
	move();
	}
}
	imgs.forEach(function(ele,index){
	ele.addEventListener("transitionend",function(){
	flag=true;
	})})
	
}
//顶部栏的出现
{
	let bar=document.querySelector(".fix-bar");
	let floatbar=document.querySelector(".float_bar");
	let float_bottom=document.querySelector(".float_bottom");
	let lists=document.querySelectorAll(".list li");
	let twos=document.querySelectorAll(".two");

	window.onscroll=function(){
		let str=document.documentElement.scrollTop;
		if(str>1139){
			bar.style.display="block";
		}else{
			bar.style.display="none";
		}
		if(str>2313){
			floatbar.style.display="block";
		}else{
			floatbar.style.display="none";
		}
		float_bottom.onclick=function(){
			let t=setInterval(function(){
				str-=200;
				if(str<0){
					clearInterval(t);
				}
					document.documentElement.scrollTop=str;
			},50)
		}
	}
	lists.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=twos[index].offsetTop-50;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=300;
				now+=speed;
				if(time===2400){
					document.documentElement.scrollTop=now;
				}
			},300)
		}
	})
	window.addEventListener("scroll",function(){
		let st =document.documentElement.scrollTop;
		for(let i=0;i<twos.length;i++){
			if(st>twos[i].offsetTop-50){
				for(let i=0;i<lists.length;i++){
					lists[i].classList.remove("active");
				}
				lists[i].classList.add("active");
			}
		}

	})

}
//移出
{
	let  spans=document.querySelectorAll(".product_middle span");
	let  h1s=document.querySelectorAll(".product_middle span h1");
	spans.forEach(function(ele,index){
		ele.onmouseenter=function(){
			h1s[index].style.bottom=0;
		}
		ele.onmouseleave=function(){
			h1s[index].style.bottom="-8px";
		}

	})

}
//左右移动
{
	let lefts=document.querySelector(".three_lbtn");
	let rights=document.querySelector(".three_rbtn");
	let contents=document.querySelector(".three_item_bottom_contents");
	let lists=document.querySelectorAll(".three_item_bottom_content");
	let h2s=document.querySelectorAll(".three_item_bottom_content_bottom h2");
	let num=0;
	console.log(lefts);
	let obj=h2s[0];
	lefts.onclick=function(){
		num--;
		if(num<0){
			num=lists.length-1;
		}
		obj.classList.remove("active");
		h2s[num].classList.add("active");
		obj=h2s[num];
		contents.style.marginLeft=-390*num+"px";
	}
	rights.onclick=function(){
		num++;
		if(num>lists.length-1){
			num=0;
			// contents.style.marginLeft=0;
		}
		obj.classList.remove("active");
		h2s[num].classList.add("active");
		obj=h2s[num];
		
		contents.style.marginLeft=-390*num+"px";	
	}
	
	h2s.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				contents.style.marginLeft=-390*index+"px";
			}
			num=index;
	})
}
//乐品购
{
	let imgs=document.querySelectorAll(".lepingous");
	let img2s=document.querySelectorAll(".lepingous_img1");
	imgs.forEach(function(ele,index){
		ele.onmouseenter=function(){
			img2s[index].style.display="block";
		}
		ele.onmouseleave=function(){
			img2s[index].style.display="none";
		}
	})
}
//右边弹出
{
	let  is=document.querySelectorAll(".right_bar_middle i");
	let ps=document.querySelectorAll(".right_bar_middle p");
	is.forEach(function(ele,index){

		ele.onmouseenter=function(){
			ps[index].style.left="-35px";
		}
		ele.onmouseleave=function(){
			ps[index].style.left="35px";
		}
	})

}