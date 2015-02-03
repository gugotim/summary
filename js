正则表达式
var re,i;
for(i=0;i<10;i++) {
  re = /cat/g;
  re.test("catastrophe");//true
}
re = /cat/g;
re.test("catastrophe");//true
re.test("catastrophe");//false
循环正常，结果都为true
最后一个为false是因为他是在上面那句为true的匹配字符串的下一个字符开始找的，没有从头开始
new RegExp同理

Function
对于函数，kkk是函数指针，kkk()则是调用,如
var b = a();//函数a会执行一次,b = a,则不会

随机数
var value = Math.floor(Math.random * num + start);
//num为可能的选择的数量，start为第一个可能的值，如，1-10的随机数
Math.floor(Math.random * 10 + 1)
可通过函数更方便的使用
function selectFrom(low, high) {
  var choices = high - low + 1;
  return Math.floor(Math.random * choices + low);
}

window.onload
如果写了多条window.onload绑定，只有最后一条才会实际执行
事件不多时，可以使用
window.onload = function() {
	funcationA();
	funcationB();
	funcationC();
}
事件较多时，可以使用
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}
把onload事件变成一个队列，并且之前的总是执行了的

对于window.onload,应使用window.onload = functiona;后面不加(),否则会立即执行
对于需要传递参数的初载函数，使用
window.onload = function(){
	functiona();
};
