console.log('js开始运行')
var mytimer
var num=1
function start(){
    mytimer=setInterval(function () {
        if(num>5){
            $('.lunbo').css('left',(-1*100).toString()+'%')
            num=2
        }
        else{
            $('.lunbo').animate({left:(-num*100).toString()+'%'},500)
            console.log('改样式');
            num++
        }
    },2000)
}

$('.left-jiantou').click(function(){
    num--
    if(num<1){
        $('.lunbo').css('left',(-5*100).toString()+'%')
        num=4
    }
    $('.lunbo').animate({left:(-num*100).toString()+'%'},500)
})
$('.right-jiantou').click(function(){
    num++
    if(num>5){
        $('.lunbo').css('left',(-1*100).toString()+'%')
        num=2
    }
    $('.lunbo').animate({left:(-num*100).toString()+'%'},500)
})
$('.jiantou').mouseover(function(){
    $('.jiantou').animate({opacity:0.8},200);
    console.log('停止');
    clearInterval(mytimer)
})
$('.jiantou').mouseout(function(){
    $('.jiantou').animate({opacity:0.2},100);
    console.log('开始');
    start()
})
start()

//文字逐个显示
var str='本人热情随和，活波开朗，具有进取精神和团队精神，有较强的动\
手能力。良好协调沟通能力，适应力强，反应快、积极、细心、灵活， 具有一\
定的社会交往能力。所以我需要找一份与自身知识结构相关的工作来展示自己\
的能力，在学习中，我注重理论与实践的结合，己具备了相当的实践操作能力。\
很强的事业心和责任感使我能够面对任何困难和挑战。'
var tex=''
var timer

function start_tex(){
    var index=0
    tex=''
    timer=setInterval(function(){
            console.log('开始显示');
            tex+=str[index] 
            $('.intro').html(tex)
            index++
            if(index==str.length){
                clearInterval(timer)
                start_tex()
            }
        },100)
}
start_tex()
// $('.introduce').mouseover(function(){
//     start_tex()
// })
// $('.introduce').mouseout(function(){
//     clearInterval(timer)
// })