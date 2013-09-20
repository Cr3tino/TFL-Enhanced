if (typeof menu!== 'undefined')  menu.close();
String.prototype.equalsIgnoreCase = function(other) {
    return typeof other !== 'string' ? false : this.toLowerCase() === other.toLowerCase(); 
};

var menu,
hideVideo,
UI2,
Strobe,
Rave
define('menu/Model',['app/base/Class',],function(Class){
return Class.extend({
init: function() 
{
    $('#chat').append('<div id="menu-ui"></div>');
    $('#chat').append('<div id="menu-ui2"></div>');
    this.initCSS();
    this.initUIListeners();
},
initCSS: function()
{

    
    var cHideVideo = hideVideo ? '#3FFF00' : '#ED1C24'; 
    var cUI = UI2 ? '#3FFF00' : '#ED1C24';
    var cStrobe = Strobe ? '#3FFF00' : '#ED1C24';
    var cRave = Rave ? '#3FFF00' : '#ED1C24';
    $('#menu-ui').append('<p id="menu-btn-hidevideo" style="color:' + cHideVideo + '">hide video</p>'
        +'<p id="menu-btn-strobe" style="color:' + cStrobe + '">Strobe Off</p>'
        +'<p id="menu-btn-rave" style="color:' + cRave+ '">Rave Off</p>'
        );
    $('#menu-ui2').append( '<p id="menu-btn-UI" style="color:' + cUI + '">UI On</p>');
    $('body').prepend('<style type="text/css" id="menu-css">'
    +'#menu-ui { position: absolute; left:-690px;margin-top:0px;}'
    +'#menu-ui p {height: 25px; padding-top: 6px; padding-left: 6px; padding-right: 6px; cursor: pointer; font-variant: small-caps; width: 84px; font-size: 15px; margin: 0; background-color:rgba(0,0,0,0.7);border:2px solid;border-radius:25px; }'
    +'#menu-btn-hidevideo {position:absolute;left:210px;top:0px;border:2px solid;border-radius:25px;text-align:center;}'
    +'#menu-btn-rave{position:absolute;left:0px; top:0px;border:2px solid;border-radius:25px;text-align:center;}'
    +'#menu-btn-strobe{position:absolute;left:105px; top:0px;border:2px solid;border-radius:25px;text-align:center;}'
    +'#menu-btn-UI {height:25px;position:absolute;right:-56px;top:40px;padding-top: 6px; padding-left: 6px; padding-right: 6px;cursor: pointer; font-variant:small-caps;font-size:15px;background-color:rgba(0,0,0,0.7);border:2px solid;border-radius:25px;}'
);
},
initUIListeners: function() 
{
    $('#menu-btn-hidevideo').on('click', function() 
	{
        hideVideo = !hideVideo;
        $(this).css('color', hideVideo ? '#3FFF00' : '#ED1C24');
	$(this).text(hideVideo ? 'hiding video' : 'hide video');
        $('#yt-frame').animate(
		{
            'height': (hideVideo ? '0px' : '271px')
        }, 
		{
            duration: 'fast'
        });
        $('#playback .frame-background').animate(
		{
            'opacity': (hideVideo ? '0' : '0.91')
        }, 
		{
            duration: 'medium'
        });
    });
	$('#menu-btn-strobe').on('click',function()
    {
        Strobe = !Strobe
        $(this).css('color', Strobe ? '#33FFF0' : '#ED1C24');
        $(this).text(Strobe ? 'Strobe On' : 'Strobe Off');
        var AudienceView = require('app/views/room/AudienceView');
        if(Strobe == true ){ AudienceView.strobeMode('true'),!0}
        else AudienceView.strobeMode(),!0;

    });
    $('#menu-btn-rave').on('click',function()
    {
        Rave = !Rave
        $(this).css('color', Rave ? '#33FFF0' : '#ED1C24');
        $(this).text(Rave ? 'Rave On' : 'Rave Off');
        var AudienceView = require('app/views/room/AudienceView');
        if(Rave == true ){ AudienceView.lightsOut('true'),!0}
        else AudienceView.lightsOut(),!0,!0;

    })
    $('#menu-btn-UI').on('click', function()
    {
        UI2 = !UI2;
        $(this).css('color', UI2 ? '#33FFF0' : '#ED1C24');
        $(this).text(UI2 ? 'UI On' : 'UI Off');
        if(UI2 == true){$('#menu-btn-rave').slideDown(); $('#menu-btn-strobe').slideDown(); $('#menu-btn-hidevideo').slideDown();}
        else{$('#menu-btn-rave').slideUp(); $('#menu-btn-strobe').slideUp(); $('#menu-btn-hidevideo').slideUp();}
   });  
},
close: function()
{
    $('#menu-ui').remove();
    $('#menu-ui2').remove();
    $('#menu-css').remove();
    $('#menu-js').remove();
},

    });
});
define('menu/Loader',['app/base/Class','menu/Model'],function(Class,Model){
        return Class.extend({ init: function() { menu = new Model();  }});
});
require(['menu/Loader'],function(a) { new a(); });
