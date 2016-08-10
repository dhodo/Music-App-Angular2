

var player=document.getElementById('audio');
var playing=false;
var icon=$('.icon-small');
$('.play').click(function(){
    if (playing)
    {
        player.pause();
        
        icon.removeClass('ion-ios-pause');
        icon.addClass('ion-play');
    }
    else
    {
        player.play();
        icon.removeClass('ion-play');
        icon.addClass('ion-ios-pause');    
    }
        
    playing=!playing;

}
);



var audslider=$('#audio-slider');
audslider.slider(
    {
        
        range:'min',
        slide: red,
        
    }
);
function red(event,ui)
{
    player.currentTime=Math.ceil((ui.value/100)* player.duration);
}

function updateProgress()
{
    var progress=$('#progressIn');
    var value=0;
    if (player.duration== 'Infinity')
        {
            
            value=100;
            audslider.slider("value",value);
        }
    else if (player.currentTime > 0)
        {
              value= Math.floor((100/player.duration) * player.currentTime);
            audslider.slider("value",value);
        }
    

    
     progress.stop().animate({'width':value + '%'},500); //set the width of the progress bar
    var handle=$('.ui-slider-handle');
    
   handle.attr('data-content',formatTime(player.currentTime)); 

    $('#time').html(formatTime(player.currentTime));
} //set the new timestamp


    
player.addEventListener("timeupdate", updateProgress, false);// add event listener for audio time updates
 



function formatTime(seconds) {
        minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    }


