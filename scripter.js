var t; 
var kname=['d','prim','sek','nm','nmd','kr','kdr'];
var ksz=[0.013,0.027,0.021,0.016,0.025,0.013,0.031];
var wink=':';
function Dater()
{
//сначала разберемся со шрифтами

var fsz= document.body.clientWidth;
fsz=(fsz>1600)?fsz*1.19 : fsz;
for(var i=0,l=kname.length;i<l;i++)
{
var el=document.getElementsByClassName(kname[i]);
var fs= fsz * ksz[i] + "px";
for(var j=0,le=el.length;j<le;j++)el[j].style.fontSize=fs;
 } 
//теперь часы
    if(t<1)return;
    var date = new Date();
    var year=date.getFullYear();
    var month=date.getMonth();
    var dat=date.getDate()
    var day=date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }
 if(minutes < 10)
    {
        minutes = '0' + minutes;
    }
 if(hours < 10)
    {
        hours = '0' + hours;
    }
switch(day)
{case 1: day="Понедельник"; break;
 case 2: day="Вторник"; break;
 case 3: day="Среда"; break;
 case 4: day="Четверг"; break;
 case 5: day="Пятница"; break;
 case 6: day="Суббота"; break;
 case 0: day="Воскресенье"; break;
 default:day="Нет значения"}

switch(month)
{case 0: month="Января"; break;
 case 1: month="Февраля"; break;
 case 2: month="Марта"; break;
 case 3: month="Апреля"; break;
 case 4: month="Мая"; break;
 case 5: month="Июня"; break;
 case 6: month="Июля"; break;
 case 7: month="Августа"; break;
 case 8: month="Сентября"; break;
 case 9: month="Октября"; break;
 case 10: month="Ноября"; break;
 case 11: month="Декабря"; break;
 default:month="Нет значения"}
wink=(wink==':')?' ' : ':';
document.getElementById('day').innerHTML =day+' '+dat;
document.getElementById('month').innerHTML =month+' '+year;
document.getElementById('time').innerHTML =hours+wink + minutes;
}