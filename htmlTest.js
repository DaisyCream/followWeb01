/**
 * Created by DaisyCream on 2015/8/23.
 */
//get the screen's width and height
var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;

//get element
var seeWindow = document.getElementById('seeWindow');
var bg = document.getElementById('bg');
var tool = document.getElementById('tool');
var back = document.getElementById('back');
var btu = document.getElementById('btu');
/***
 * set ID(seeWindow)'s width and height
 */
function setLong(){
    seeWindow.style.width = screenWidth + 'px';
    seeWindow.style.height = screenHeight + 'px';

    bg.style.width = screenWidth + 1 + 'px';
    bg.style.height = screenHeight + 'px';

    tool.style.height = screenHeight + 'px';

    back.style.height = screenHeight + 'px';
}

setLong();


TOOLMOVE = function(){};

TOOLMOVE.count = 0;
TOOLMOVE.touch = function(){
    btu.onclick = function(){
        if(TOOLMOVE.count%2==0){
            bg.className = 'toolIn';
            btu.className = 'btuTurnIn';
            bg.style.marginLeft = -240+'px';
        }
        else{
            bg.className = 'toolOut';
            btu.className = 'btuTurnOut';
            bg.style.marginLeft = 0+'px';
        }
        TOOLMOVE.count++;
    }
};

window.onload = function(){
    TOOLMOVE.touch();
};