// 获取id为day的html节点
var day = document.getElementById('day');
var today = document.getElementById('today');
var week = document.getElementById('week');

// 获取剩余时间
var timeNow = new Date();
var secondNow = timeNow.getTime();
var days = Math.floor((1507910400000 - secondNow)/(24*60*60*1000));

// 获取年月日
var year = timeNow.getFullYear();
var month = timeNow.getMonth() + 1;
var dayNow = timeNow.getDate();
var timeDate = year + '年' + month + '月' + dayNow + '日';

// 获取星期
var weekNumber = timeNow.getDay();
var weekArray = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

// 将获取到的年月日插入today的html节点
today.innerHTML =  timeDate;

// 将获取到的星期插入week的html节点
week.innerHTML = weekArray[weekNumber];

// 将获取到的时间插入id为day的html节点
day.innerHTML = days;

