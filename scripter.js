var t; 
var kname=['d','prim','sek','nm','nmd','kr','kdr'];
var ksz=[0.013,0.027,0.021,0.016,0.025,0.013,0.031];
var wink=':';
function Dater()
{
//������� ���������� �� ��������

var fsz= document.body.clientWidth;
fsz=(fsz>1600)?fsz*1.19 : fsz;
for(var i=0,l=kname.length;i<l;i++)
{
var el=document.getElementsByClassName(kname[i]);
var fs= fsz * ksz[i] + "px";
for(var j=0,le=el.length;j<le;j++)el[j].style.fontSize=fs;
 } 
//������ ����
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
{case 1: day="�����������"; break;
 case 2: day="�������"; break;
 case 3: day="�����"; break;
 case 4: day="�������"; break;
 case 5: day="�������"; break;
 case 6: day="�������"; break;
 case 0: day="�����������"; break;
 default:day="��� ��������"}

switch(month)
{case 0: month="������"; break;
 case 1: month="�������"; break;
 case 2: month="�����"; break;
 case 3: month="������"; break;
 case 4: month="���"; break;
 case 5: month="����"; break;
 case 6: month="����"; break;
 case 7: month="�������"; break;
 case 8: month="��������"; break;
 case 9: month="�������"; break;
 case 10: month="������"; break;
 case 11: month="�������"; break;
 default:month="��� ��������"}
wink=(wink==':')?' ' : ':';
document.getElementById('day').innerHTML =day+' '+dat;
document.getElementById('month').innerHTML =month+' '+year;
document.getElementById('time').innerHTML =hours+wink + minutes;
}