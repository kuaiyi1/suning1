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


	let lis=document.querySelectorAll(".banner-middle-left li");
	let dispalys=document.querySelectorAll(".banner_display");
	console.log(lis);
	let obj=lis[0];
	lis.forEach(
		function(ele,index){
			ele.onmouseenter=function(){
				obj.classList.remove=".active1";
				ele.classList.add=".active1";
				obj=ele;
				dispalys[index].style.display="block";

			}
			ele.onmouseleave=function(){
				dispalys[index].style.display="none";
			}
		});
	
}
//顶部栏的出现
{
	let bar=document.querySelector(".fix-bar");
	let floatbar=document.querySelector(".float_bar");
	let float_bottom=document.querySelector(".float_bottom");
	let lists=document.querySelectorAll(".list li");
	let twos=document.querySelectorAll(".two");
	let rights=document.querySelector(".right_bar_bottom i.rights6");
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
		rights.onclick=function(){
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
			num=0;
		}
		obj.classList.remove("active");
		h2s[num].classList.add("active");
		obj=h2s[num];
		contents.style.marginLeft=-390*num+"px";
	}
	rights.onclick=function(){
		num++;
		if(num>lists.length-1){
			num=lists.length-1;
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
	let spans=document.querySelectorAll(".right_bar_middle span")
	is.forEach(function(ele,index){

		ele.onmouseenter=function(){
			ele.style.display="none";
			ele.style.background="red";
			spans[index].style.display="block";
			ps[index].style.left="-35px";
			ps[index].style.color="#383838";
			ps[index].style.background="#FFAA01";
		}
		ele.onmouseleave=function(){
			ele.style.display="block";
			ele.style.background="";
			spans[index].style.display="none";
			ps[index].style.left="35px";
			ps[index].style.color="";
			ps[index].style.background="";
		}
	})
	let is1=document.querySelectorAll(".right_bar_bottom i");
	let ps1=document.querySelectorAll(".right_bar_bottom p");
	let spans1=document.querySelectorAll(".right_bar_bottom span");
	is1.forEach(function(ele,index){

		ele.onmouseenter=function(){
			ps1[index].style.left="-70px";
		}
		ele.onmouseleave=function(){
			ps1[index].style.left="70px";
		}
	})
	let lefts=document.querySelector(".three_left1");
	let rights=document.querySelector(".three_right1");
	let contents=document.querySelector(".lepingou_contents");
	let lepingous=document.querySelectorAll(".lepingou_content");
	let num=0;
	
	
	lefts.onclick=function(){
		num--;
		if(num<0){
			num=0;
		}
		
		contents.style.marginLeft=-590*num+"px";
	}
	rights.onclick=function(){
		num++;
		if(num>lepingous.length-1){
			num=lepingous.length-1;
			// contents.style.marginLeft=0;
		}
		
		
		contents.style.marginLeft=-590*num+"px";	
	}

}
{
	let items=document.querySelectorAll(".daohang_item");
	let displays=document.querySelectorAll(".daohang_display");
	let h1s=document.querySelectorAll(".daohang_item h1");
	items.forEach(function(ele,index){
	    ele.onmouseenter=function(){
	    	ele.style.border="1px solid #ccc";
	    	h1s[index].style.transform="rotate(180deg)"
	    	displays[index].style.display="block";
	    	displays[index].style.height="120px";
	    	displays[index].style.top="35px";
	    }
	    ele.onmouseleave=function(){
	    	ele.style.border="none";
	    	h1s[index].style.transform="rotate(0deg)"
	    	displays[index].style.display="none";
	    	displays[index].style.height="0";
	    	displays[index].style.top="0";
	    	
	    }
	})
}
//大聚惠开始
{
	let lefts=document.querySelector(".juhui_left");
	let rights=document.querySelector(".juhui_right");
	let contents=document.querySelector(".juhui_tuwen_lefts");
	let left1=document.querySelectorAll(".juhui_tuwen_left1");
	let num=0;
	
	
	lefts.onclick=function(){
		num--;
		if(num<0){
			num=0;
		}
		
		contents.style.marginLeft=-1000*num+"px";
	}
	rights.onclick=function(){
		num++;
		if(num>left1.length-1){
			num=left1.length-1;
			// contents.style.marginLeft=0;
		}
		
		
		contents.style.marginLeft=-1000*num+"px";	
	}


}