var nav = document.querySelector(".mui-lift")
console.log(nav.offsetheight)
    // nav.style.transform = "scale(1, 1)"as-shelter
var as = document.querySelector(".as-shelter")
var search = document.querySelector(".as-total-container")
window.onscroll = () => {


    var dds = document.documentElement.scrollTop
    var h = document.documentElement.clientHeight
        // console.log(document.documentElement.clientHeight)
    console.log(document.documentElement.scrollTop)
    if (dds > 700) {
        as.style.top = 0
        search.style.top = 0
        nav.style.transform = "scale(1, 1)"
        nav.style.top = (h - nav.offsetHeight) / 2 + "px"
        console.log(nav.style.top)
    }
    if (dds < 700) {
        as.style.top = -50 + "px"
        search.style.top = -50 + "px"
        nav.style.transform = "scale(0, 0)"
    }
}

function animate(obj, attrObj, duration, fn, callback) {
    // 参数初始化
    if (obj.nodeType !== 1) {
        console.error("类型不对");
        return;

    }
    var start = {};
    var change = {};
    var time = 0;
    var fn = fn || Tween.Linear;

    // 
    for (var i in attrObj) {
        start[i] = css(obj, i)
        change[i] = attrObj[i] - start[i]
    }

    obj.t = setInterval(function() {
        time += 50;
        for (var i in attrObj) {
            // obj.style[i] = fn(time, start[i], change[i], duration) +
            //     "px"
            css(obj, i, fn(time, start[i], change[i], duration))


        }
        if (time >= duration) {
            for (var i in attrObj) {
                css(obj, i, attrObj[i])
            }
            clearInterval(obj.t);
            if (callback) {
                callback();
            }
        }
    }, 50)


}


// css(div,"width",200)
function css(obj, attr, val) {
    if (arguments.length == 2) {
        switch (attr) {
            case "background":
            case "color":
            case "opacity":
                return getComputedStyle(obj, null)[attr];
                break;
            default:
                return parseInt(getComputedStyle(obj, null)[attr]);

        }

    } else if (arguments.length == 3) {
        switch (attr) {
            case "background":
            case "color":
            case "opacity":
            case "border":
                obj.style[attr] = val;
                break;
            default:
                obj.style[attr] = val + "px"

        }


    }
}



var lists = document.querySelectorAll(".win li");
var sps = document.querySelectorAll(".swiper-pagination-bullet")
num = 0;
setInterval(() => {
    num++;
    if (num > lists.length - 1) {
        num = 0;
    }
    for (var i = 0; i < lists.length; i++) {
        lists[i].style.opacity = 0;
        lists[i].style.zIndex = 0;
        // sps[i].setAttribute("class", "swiper-pagination-bullet");
    }
    animate(lists[num], {
        opacity: 1
    }, 300, Tween.Linear, function() {
        lists[num].style.zIndex = 1;
        sps[num].setAttribute("class", "swiper-pagination-bullet  abc");
    })

}, 3000);
for (let i = 0; i < sps.length; i++) {
    sps[i].onclick = function() {
        num = i;
        for (var j = 0; j < lists.length; j++) {
            sps[j].setAttribute("class", "swiper-pagination-bullet");
            lists[j].style.opacity = 0;
            lists[j].style.zIndex = 0;

        }
        sps[i].setAttribute("class", "swiper-pagination-bullet  abc");
        lists[i].style.opacity = 1;
        lists[i].style.zIndex = 1;

    }
}


var title = document.querySelectorAll(".grid1_text");
var shops = document.querySelectorAll(".grid1_img");
console.log(title);
console.log(shops);

for (let i = 0; i < title.length; i++) {
    title[i].onclick = function() {
        for (var j = 0; j < title.length; j++) {
            title[j].style.background = 'rgb(241,241,241)';
            shops[j].style.display = "none";
        }
        title[i].style.background = "#00B262";
        shops[i].style.display = "block";
    }
}

var y = 0;
setInterval(() => {
    if (y) {
        title[0].style.background = "#00B262";
        shops[0].style.display = "block";
        title[1].style.background = 'rgb(241,241,241)';
        shops[1].style.display = "none";
        y = false;
    } else {
        title[1].style.background = "#00B262";
        shops[1].style.display = "block";
        title[0].style.background = 'rgb(241,241,241)';
        shops[0].style.display = "none";
        y = true
    }
}, 1000);



var lis = document.querySelectorAll(".banner1-nav li");
console.log(lis)
var nei = document.querySelectorAll(".neirong")
console.log(nei)
for (let i = 0; i < lis.length; i++) {
    console.log(1)
    lis[i].onclick = function() {
        for (var j = 0; j < lis.length; j++) {
            lis[j].style.background = "none";
            nei[j].style.display = "none";
        }
        lis[i].style.background = "yellow";
        nei[i].style.display = "block";
    }
}


//动画算法
/*
		    Linear：无缓动效果(匀速运动)；
			Quad：二次方的缓动；
			Cubic：三次方的缓动
			Quartic：四次方的缓动；
			Quintic：五次方的缓动；
			Sinusoidal：正弦曲线的缓动；
			Exponential：指数曲线的缓动；
			Circular：圆形曲线的缓动；
			Elastic：指数衰减的正弦曲线缓动；
			Back：超过范围的三次方缓动）；
			Bounce：指数衰减的反弹缓动。
			

			每个效果都分三个缓动方式（方法），分别是：
			easeIn：从0开始加速的运动；
			easeOut：减速到0的运动；
			easeInOut：前半段从0开始加速，后半段减速到0的运动。
			


			函数的四个参数分别代表：

				t--- current time（当前时间）；0 +=60
				b--- beginning value（初始值）；
				c--- change in value（变化量）；end-start
				d---duration（持续时间）  5000
			Tween.Quad.easeInt()

	
             运算的结果就是当前的运动路程。
             
             ecmascsript 基本语法  flash   nodejs  
             flash 里面 取出来的算法
          */

Tween = {
    Linear: function(t, b, c, d) { return c * t / d + b; }
}