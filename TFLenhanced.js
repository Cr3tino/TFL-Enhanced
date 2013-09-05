/* Created by Colgate and thedark1337. Please ask for permission before using this code. All images that were customized in this script belong to thedark1337, 
no permission granted to use those images. Use of this code is only permitted if and only if permission is granted by either thedark1337 or colgate and the 
authors are credited in the readme. Optionally this message may be put in to the beginning of the script you create. Failure to comply will result
in severe consequences*/


if (TFLEnhanced !== undefined)
    TFLEnhanced.close();
String.prototype.equalsIgnoreCase = function(other) {
    return this.toLowerCase() === other.toLowerCase();
};
var plugCubed,
plugBot,
TFLEnhancedModel = require('app/base/Class').extend({
    version: {
        major: 2,
        minor: 2,
        patch: 3
    },
    toString: function() { return TFLEnhanced.version.major + '.' + TFLEnhanced.version.minor + '.' + TFLEnhanced.version.patch},
    init: function(){
        this.Socket();
        var popout = require('app/views/room/popout/PopoutView');
        var Lang = require('lang/Lang');
        setTimeout($.proxy(this.initCSS,this), 1500);
                var words = {
            // Syntax: 'Search word' : 'Replace word',
            "Points" : "Points",
            "Now Playing" : "Now Playing",
            "Time Remaining" : "Time Wasted",
            "Volume" : "Crank it up!",
            "Current DJ" : "Current DJ",
            "Crowd Approval" : "Crowd's Reaction",
            "Fans":"Minions"
        };
        String.prototype.prepareRegex = function() {
            return this.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, "\\$1");
        };
        Lang.ui.buttonVotePositive = "http://i.imgur.com/AavorRZ.png";
        Lang.ui.buttonVotePositiveSelected = "http://i.imgur.com/nPqYDEs.png";
        Lang.ui.buttonVotePositiveDisabled = "http://i.imgur.com/AavorRZ.png";
        Lang.ui.buttonAddThis = "http://i.imgur.com/IwFRCVd.png";
        Lang.ui.buttonAddThisDisabled = "http://i.imgur.com/IwFRCVd.png";   
        Lang.ui.buttonSkipThis  = "http://i.imgur.com/kL3MvJm.png";
        Lang.rollover.fans = "Minions"
        Lang.messages.fanEnter = "Your minion %NAME% just joined the room!"
        Lang.messages.fanOf = "You are now a minion of %NAME%."
        Lang.messages.unFanOf = "You are no longer a minion of %NAME%."
        Lang.messages.follow = "%NAME% is now your minion!"
        Lang.messages.welcome = "Welcome to the bug.dj beta. Version %VERSION%"
        Lang.messages.cap = "Capping fuckers at %COUNT%"
        Lang.rollover.becomeFan = "Become a minion"
        Lang.rollover.fans = "Minions"
        Lang.alerts.updateMesage ="bug.dj has been updated and requires a refresh. Click OK to refresh the page."
        Lang.ui.buttonDJPlay = "http://i.imgur.com/SqU01C6.png";
        Lang.ui.buttonDJLeave = "http://i.imgur.com/i4YkTFC.png";
        Lang.ui.buttonDJWaitlistJoin = "http://i.imgur.com/SqU01C6.png";
        Lang.ui.buttonDJWaitlistLeave = "http://i.imgur.com/i4YkTFC.png";
        Lang.ui.buttonDJQuitShort = "http://i.imgur.com/i4YkTFC.png";
        Lang.ui.buttonDJQuit = "http://i.imgur.com/i4YkTFC.png";
        Lang.ui.buttonDJPlayShort = "http://i.imgur.com/SqU01C6.png";
        Lang.rollover.host = "The Boss"
        Lang.chat.help = "<strong>Chat Commands:</strong><br/>/em &nbsp; <em>Emote</em><br/>/me &nbsp; <em>Emote</em><br/>/clear &nbsp; <em>Clear Chat History</em><br/>/cap # &nbsp; <em>Limits the number of avatars rendered (1-200)</em><br/>/ts # &nbsp; <em>Chat timestamps (12, 24, 0)</em><br />/emoji on (or off) <em>Enable/disable Emojis</em><br /> /strobe on/off &nbsp; <em>Strobe light on/off</em><br /> /rave on/off &nbsp; <em>Lights out on/off</em><br />/close &nbsp; <em>Remove TFL Enhanced script</em> <br /> /Avatar # &nbsp; <em> change Halloween Avatars ( # = 1-13)</em> <br /> /Auto On &nbsp; <em> plugbot load </em>"
        $('#button-vote-negative').hide();
        $('#button-chat-popout').click(function(){setTimeout(function(){TFLEnhanced.initPopout()},500)});
        function isOkTag(tag) {
            return (",pre,blockquote,code,input,button,textarea".indexOf(","+tag) == -1);
        };
        var regexs=new Array(),
        replacements=new Array();
        for(var word in words) {
            if(word != "") {
                regexs.push(new RegExp("\\b"+word.prepareRegex().replace(/\*/g,'[^ ]*')+"\\b", 'gi'));
                replacements.push(words[word]);
            }
        }
        var texts = document.evaluate(".//text()[normalize-space(.)!='']",document.body,null,6,null), text="";
        for(var i=0,l=texts.snapshotLength; (this_text=texts.snapshotItem(i)); i++) {
        if(isOkTag(this_text.parentNode.tagName.toLowerCase()) && (text=this_text.textContent)) {
            for(var x=0,l=regexs.length; x<l; x++) {
                text = text.replace(regexs[x], replacements[x]);
                this_text.textContent = text;
                }
            }
        }
                this.proxy = {
            onChat: $.proxy(this.onChat, this)
        };
        API.on(API.CHAT,this.proxy.onChat)
        API.on(API.CHAT_COMMAND,this.customChatCommand)
         var a = $('#chat-messages'),b = a.scrollTop() > a[0].scrollHeight - a.height() - 20;
        a.append('<div class="chat-update"><span class="chat-text" style="color:#FF0000"><i>Running TFL Enhanced version ' + this.version.major + '.' + this.version.minor + '.' + this.version.patch + '</i></span></div>');
        a.append('<div class="chat-update"><span style="color:#FFFF00">Join our facebook group </span> : <a href="http://goo.gl/OKI4h">FB</a></div>')
         b && a.scrollTop(a[0].scrollHeight);
        this.removeElements();
        if (plugCubed == undefined) $.getScript("http://plugCubed.com/compiled/plugCubed.min.js")
            window.alert = function(data){
            var a = $('#chat-messages'),b = a.scrollTop() > a[0].scrollHeight - a.height() - 20;
            a.append('<div class="chat-update"><span class="chat-text" style="color:#FF0000"><strong>[Window Alert]</strong></span><span style="color:#FFFFFF"> : ' + data + '</span></div>'); 
            b && a.scrollTop(a[0].scrollHeight);
            setTimeout(function(){location.reload()},1500)
            };
    },
    close: function(){
        var Lang = require('lang/Lang');
        $('#TFL-css').remove();
        $('#room-wheel').css('background','url("http://plug.dj/_/static/images/room_wheel2.0ea1fb92.png")');
        $('#button-vote-negative').show();
        $('#button-dj-waitlist-join').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonDJWaitListJoin.fbffc481.png); display: block;');
        $('#button-dj-waitlist-leave').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonDJWaitListLeave.5d5847b1.png); display: block;');
        $('#button-dj-play').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonDJPlay.742fd499.png); display: block;');
        $('#button-dj-leave').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonDJQuit.1a691d0c.png); display: block;');
        $('#dj-console').attr('style','background-image:url(http://plug.dj/_/static/images/DJConsole2.8acc86f0.png); display:block;');
        $('#button-add-this').attr('style','background-image:url(http://plug.dj/_/static/images/en/ButtonAddThis.175d7d45.png);');
        $('#meta-frame').show('.frame-background');
        $('#playback').show('.frame-background');
        $('#meta-frame').css('background-color','#0A0A0A');
        $('#playback').css('background-color','#0A0A0A');
        $('body').attr('style','background-image: url(http://plug.dj/_/static/images/room_background1.91844df.jpg); no-repeat scroll center top #000000;');
        Lang.ui.buttonVotePositive = "http://plug.dj/_/static/images/en/ButtonVotePositive.85cfc5a9.png";
        Lang.ui.buttonVotePositiveSelected = "http://plug.dj/_/static/images/en/ButtonVotePositiveSelected.c9947cb3.png";
        Lang.ui.buttonVotePositiveDisabled = "http://plug.dj/_/static/images/en/ButtonVotePositiveDisabled.ce7c40b3.png";
        Lang.ui.buttonAddThis = "http://plug.dj/_/static/images/en/ButtonAddThis.175d7d45.png";
        Lang.ui.buttonAddThisDisabled ="http://plug.dj/_/static/images/en/ButtonAddThisDisabled.b121845e.png"; 
        Lang.ui.buttonSkipThis = "http://plug.dj/_/static/images/en/ButtonSkipThis.b9a1c7b7.png";
        Lang.ui.buttonDJPlay = "http://plug.dj/_/static/images/en/ButtonDJPlay.742fd499.png";
        Lang.ui.buttonDJLeave = "http://plug.dj/_/static/images/en/ButtonDJQuit.1a691d0c.png";
        Lang.ui.buttonDJWaitlistJoin = "http://plug.dj/_/static/images/en/ButtonDJWaitListJoin.fbffc481.png";
        Lang.ui.buttonDJWaitlistLeave = "http://plug.dj/_/static/images/en/ButtonDJWaitListLeave.5d5847b1.png";
        Lang.ui.buttonDJQuitShort = "http://plug.dj/_/static/images/en/ButtonDJQuitShort.8e572d1a.png";
        Lang.ui.buttonDJQuit = "http://plug.dj/_/static/images/en/ButtonDJQuit.1a691d0c.png";
        Lang.ui.buttonDJPlayShort = "http://plug.dj/_/static/images/en/ButtonDJPlayShort.b88f8f86.png";
        Lang.messages.fanEnter = "Your fan %NAME% just joined the room!"
        Lang.messages.fanOf = "You are now a fan of %NAME%."
        Lang.messages.unFanOf = "You are no longer a fan of %NAME%." 
        Lang.messages.follow = "%NAME% is now your fan!"
        Lang.messages.welcome = "Welcome to the plug.dj beta. Version %VERSION%"
        Lang.messages.cap = "Capping avatars at %COUNT%"
        Lang.rollover.becomeFan = "Become a fan"
        Lang.rollover.fans = "fans"
        Lang.rollover.host = "Host"
        Lang.alerts.updateMesage ="plug.dj has been updated and requires a refresh. Click OK to refresh the page."
        Lang.chat.help = "<strong>Chat Commands:</strong><br/>/em &nbsp; <em>Emote</em><br/>/me &nbsp; <em>Emote</em><br/>/clear &nbsp; <em>Clear Chat History</em><br/>/cap # &nbsp; <em>Limits the number of avatars rendered (1-200)</em><br/>/ts # &nbsp; <em>Chat timestamps (12, 24, 0)</em><br/>/emoji on (or off) <em>Enable/disable Emojis</em>"        
        API.off(API.CHAT,this.proxy.onChat)
        API.off(API.CHAT_COMMAND,this.customChatCommand)
        if(plugCubed != undefined) plugCubed.close();
        plugCubed = undefined
        if(plugBot != undefined) plugBot.close();
        plugBot = undefined
        if (this.socket) {
        this.socket.onclose = function() {};
        this.socket.close();
        }
    },
    initCSS: function() {
        $('#room-wheel').css('background','url("https://github.com/Colgate/TFL-Enhanced/raw/master/extras/TFL.gif")');
        $('#room-wheel').css('background-repeat','no-repeat');
        $('#room-wheel').css('background-position','500px 235px');
        $('#meta-frame .frame-background').hide('.frame-background');
        $('#button-dj-waitlist-join').attr('style','background-image:url(http://i.imgur.com/SqU01C6.png); display: block;');
        $('#button-dj-waitlist-leave').attr('style','background-image:url(http://i.imgur.com/i4YkTFC.png); display: block;');
        $('#button-dj-play').attr('style','background-image:url(http://i.imgur.com/SqU01C6.png); display: block;');
        $('#button-dj-leave').attr('style','background-image:url(http://i.imgur.com/i4YkTFC.png); display: block;');
        $('#dj-console').attr('style','background-image:url(http://i.imgur.com/3qAzTBl.png); display:block; position:absolute; top:15px; width:317px;');
        $('#button-add-this').attr('style','background-image:url(http://i.imgur.com/IwFRCVd.png);');
        $('#meta-frame').css('background-color','transparent');
        $('#playback .frame-background').hide('.frame-background');
        $('#playback').css('background-color','transparent');
        $('body').attr('style','background: none');
            $('head').append('<link href="http://fonts.googleapis.com/css?family=Faster+One" rel="stylesheet" type="text/css">'
            + '<style type="text/css" id="TFL-css">'
            + 'html{background: url("http://i.imgur.com/NtKtM5t.png") no-repeat scroll center top #000000;}'
            + '#room-wheel {position:absolute;top:50px;}'
            + '#button-lobby { background-image: url("http://i.imgur.com/GjbQ4IK.png");}'
            + 'body {color:#66FFFF;}'
            + '#current-dj-value {color:#66FFFF;}'
            + '.chat-title {font-family: "Faster One", cursive;}'
            + '#button-dj-play.button-dj {background-image: url("http://i.imgur.com/SqU01C6.png");}'
            + '#button-dj-quit.button-dj {background-image: url("http://i.imgur.com/i4YkTFC.png");}'
            + '#button-dj-waitlist-join.button-dj {background-image: url("http://i.imgur.com/SqU01C6.png");}'
            + '#button-dj-waitlist-leave.button-dj {background-image: url("http://i.imgur.com/i4YkTFC.png");}'
            + '#button-dj-waitlist-view {background-image: url("http://i.imgur.com/Ppaf1EX.png");}'
            + '#button-my-playlists {background-image: url("http://i.imgur.com/PsMyBcu.png");}'
            + '#button-share-facebook {background-image: url("http://i.imgur.com/DxyDvh5.png");}'
            + '#button-share-twitter {background-image: url("http://i.imgur.com/qNsYnNY.png");}'
            + '#button-refresh {background-image: url("http://i.imgur.com/Do13WJg.png");}'
            + '#button-hd-on {background-image: url("http://i.imgur.com/gEh7chb.png");}'
            + '#button-hd-off {background-image: url("http://i.imgur.com/4xvCfmv.png");}'
            + '#current-dj-value {color:#66FFFF;}'
            + '#now-playing-value{color:#66FFFF;}'
            + '#room-score-value{color:#66FFFF;}'
            + '#chat {color:#00D1FF;}'
            + '.chat-cohost {color:#00FF95;}'
            + '.chat-host {color:#4CFF00;}'
            + '.chat-emote {color:#FCFF00;}'    
            + '.chat-emote .chat-from {color:#FCFF00;}'
            + '.chat-emote .chat-text, .chat-system .chat-text {color:#FCFF00;}'
            + '.chat-host {background-image: url("http://i.imgur.com/FIRn1Lp.png");}'
            + '.chat-cohost {background-image: url("http://i.imgur.com/f5VVDSz.png");}'
            + '.chat-manager{background-image: url("http://i.imgur.com/dJa4Svb.png");}'
            + '.chat-bouncer{background-image: url("http://i.imgur.com/Q3I4vg0.png");}' 
            + '.chat-from-featureddj {background: url("http://i.imgur.com/tlXvCWf.png") no-repeat;}'
            + '.chat-from-featureddj {padding-left:17px;}'
            + '.chat-message .chat-from-featureddj, .chat-mention .chat-from-featureddj {color:#0084FF !important;}'
            + '.chat-message .chat-from-bouncer, .chat-mention .chat-from-bouncer {color:#66CDD6 !important;}'
            + '.chat-message .chat-from-manager, .chat-mention .chat-from-manager {color:#92FFFF !important;}'
            + '.chat-message .chat-from, .chat-mention .chat-from{background: url("http://i.imgur.com/bJXq2aX.png") no-repeat;}'
            + '.chat-message .chat-from, .chat-mention .chat-from {padding-left:17px;}'
            + '.chat-from-you {background: url("http://i.imgur.com/bJXq2aX.png") no-repeat;}'
            + '.chat-from-you {padding-left:17px;}'
            + '.chat-manager {color:#20F92E}'
            + '.chat-message .chat-from-host, .chat-mention .chat-from-host {color:#FF4000 !important;}'
            + '.chat-message .chat-from-cohost, .chat-mention .chat-from-cohost {color:#0D00FF !important;}'
            + '.chat-moderation .chat-from {color:#00FF22;}'
            + '.chat-moderation {color:#00fF22;}'
            + '.chat-text a:link {color:#FCFF00;}'
            + '.chat-text a:visited {color:#22FF00;}'
            + '.chat-text a:hover {color:#EF00FF;}'
            + '.chat-text a:active {color:#66FFFF;}'
            + '#volume-bar-value {background-image: url("http://i.imgur.com/HF5pnAR.png");}' 
        + '</style>');
},
initPopout : function(){
        var popout = require('app/views/room/popout/PopoutView');
        var css = document.createElement('style');
        css.type = 'text/css';
            var styles = 'body {color:#66FFFF}';
            styles+= '#current-dj-value {color:#66FFFF}';
            styles+= '.chat-title {font-family: "Faster One", cursive}';
            styles+= '#current-dj-value {color:#66FFFF}';
            styles+= '#now-playing-value{color:#66FFFF}';
            styles+= '#room-score-value{color:#66FFFF}';
            styles+= '#chat {color:#00D1FF}';
            styles+= '.chat-cohost {color:#00FF95}';
            styles+= '.chat-host {color:#4CFF00}';
            styles+= '.chat-emote {color:#FCFF00}';    
            styles+= '.chat-emote .chat-from {color:#FCFF00}';
            styles+= '.chat-emote .chat-text, .chat-system .chat-text {color:#FCFF00}';
            styles+= '.chat-host {background-image: url("http://i.imgur.com/FIRn1Lp.png")}';
            styles+= '.chat-cohost {background-image: url("http://i.imgur.com/f5VVDSz.png")}';
            styles+= '.chat-manager {background-image: url("http://i.imgur.com/dJa4Svb.png")}';
            styles+= '.chat-bouncer{background-image: url("http://i.imgur.com/Q3I4vg0.png")}'; 
            styles+= '.chat-from-featureddj {background: url("http://i.imgur.com/tlXvCWf.png") no-repeat}';
            styles+= '.chat-from-featureddj {padding-left:17px}';
            styles+= '.chat-message .chat-from-featureddj, .chat-mention .chat-from-featureddj {color:#0084FF !important}';
            styles+= '.chat-message .chat-from-bouncer, .chat-mention .chat-from-bouncer {color:#66CDD6 !important}';
            styles+= '.chat-message .chat-from-manager, .chat-mention .chat-from-manager {color:#92FFFF !important}';
            styles+= '.chat-message .chat-from, .chat-mention .chat-from{background: url("http://i.imgur.com/bJXq2aX.png") no-repeat}';
            styles+= '.chat-message .chat-from, .chat-mention .chat-from {padding-left:17px}';
            styles+= '.chat-from-you {background: url("http://i.imgur.com/bJXq2aX.png") no-repeat}';
            styles+= '.chat-from-you {padding-left:17px}';
            styles+= '.chat-manager {color:#20F92E}';
            styles+= '.chat-message .chat-from-host, .chat-mention .chat-from-host {color:#FF4000 !important}';
            styles+= '.chat-message .chat-from-cohost, .chat-mention .chat-from-cohost {color:#0D00FF !important}';
            styles+= '.chat-moderation .chat-from {color:#00FF22}';
            styles+= '.chat-moderation {color:#00fF22}';
            styles+= '.chat-text a:link {color:#FCFF00}';
            styles+= '.chat-text a:visited {color:#22FF00}';
            styles+= '.chat-text a:hover {color:#EF00FF}';
            styles+= '.chat-text a:active {color:#66FFFF}';
            styles+= '#volume-bar-value {background-image: url("http://i.imgur.com/HF5pnAR.png")}'; 
            if (css.styleSheet) css.styleSheet.cssText = styles;
            else css.appendChild(document.createTextNode(styles));
            popout._window.document.head.appendChild(css);
},
    onChat: function(data){
        if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.MANAGER)  || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!strobe on') === 0) {
            API.chatLog(data.from + ' hit the strobe light!');
           require ('app/views/room/AudienceView').strobeMode('true');
        } else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.MANAGER)|| data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!strobe off') === 0) {
            require ('app/views/room/AudienceView').strobeMode();
        } else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.MANAGER)  || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!rave on') === 0) {
            API.chatLog(data.from + ' turned the lights down!');
             require ('app/views/room/AudienceView').lightsOut('true');
        } else if (data.type == 'message' && (API.hasPermission(data.fromID, API.ROLE.MANAGER)  || data.fromID == "50aeb077877b9217e2fbff00") && data.message.indexOf('!rave off') === 0) {
            require ('app/views/room/AudienceView').lightsOut();
        }
        if (data.fromID == '5194c32d96fba57f21243cc4')
        {
            $('.chat-id-'+ data.chatID).attr('style','background-image:url(http://i.imgur.com/hPQ6ghY.png);');
            $('.chat-id-'+ data.chatID).css('color','#AB00FF');
        }
         if (data.fromID == '5112c273d6e4a94ec0554792')
        {
            $('.chat-id-'+ data.chatID).attr('style','background-image:url(http://i.imgur.com/VQiQJgm.png);');
        }
        if (data.fromID === API.getUser().id && this.socket.readyState === SockJS.OPEN)
        this.socket.send(JSON.stringify({type:"chat",msg:data.message,chatID:data.chatID,username:data.from,ID:data.fromID,room:window.location.pathname.split('/')[1]}));
    },
    customChatCommand: function(value) {
         var  AudienceView = require ('app/views/room/AudienceView');
        if (value == '/strobe on'){API.chatLog(API.getUser().username +  ' hit the strobe light!'); AudienceView.strobeMode('true'), !0}
        if (value == '/strobe off'){AudienceView.strobeMode(),!0}
        if (value == '/rave on'){API.chatLog(API.getUser().username + ' turned the lights down!'); AudienceView.lightsOut('true'),!0}
        if (value == '/rave off'){AudienceView.lightsOut(),!0}
        if (value == '/close'){return TFLEnhanced.close(),!0}
        if (value.indexOf('/Avatar')=== 0){
            var i =value.substr(8);
            if(i >= 10)
                {
                var avatar = require('app/services/user/UserChangeAvatarService'); 
                 avatar = new avatar('halloween'+ i);
                };
            if(i<=9)
             {
                var avatar = require('app/services/user/UserChangeAvatarService');
                avatar = new avatar('halloween0'+ i);
             };
        }
       if (value == '/Auto On'){if(plugBot == undefined){$.getScript('https://raw.github.com/thedark1337/Plugbot/master/plugbot.js')}};
       if (value =='/update'){if(API.hasPermission(API.getUser().id,API.ROLE.HOST) && API.getUser().id == '50b1961c96fba57db2230417'){TFLEnhanced.socket.send(JSON.stringify({type:"update"}));}}
       if (value =='/reload'){if(API.hasPermission(API.getUser().id,API.ROLE.HOST) && API.getUser().id == '50b1961c96fba57db2230417'){TFLEnhanced.socket.send(JSON.stringify({type:"reload"}));}}
       if (value.indexOf('/strobes')===0){if(API.hasPermission(API.getUser().id,API.ROLE.HOST) && API.getUser().id == '50b1961c96fba57db2230417'){
        if(value.substr(9) == 'on'){
        TFLEnhanced.socket.send(JSON.stringify({type:"strobe",trigger:"true"}));
        }
        if(value.substr(9)== 'off'){
        TFLEnhanced.socket.send(JSON.stringify({type:"strobe",trigger:"false"}))}
        }
    }
           if (value.indexOf('/raves')===0){if(API.hasPermission(API.getUser().id,API.ROLE.HOST) && API.getUser().id == '50b1961c96fba57db2230417'){
        if(value.substr(7) == 'on'){
        TFLEnhanced.socket.send(JSON.stringify({type:"rave",trigger:"true"}));
        }
        if(value.substr(7)== 'off'){
        TFLEnhanced.socket.send(JSON.stringify({type:"rave",trigger:"false"}))}
        }
    }
      if (value.indexOf('/broadcast')===0){if(API.hasPermission(API.getUser().id,API.ROLE.HOST) && API.getUser().id == '50b1961c96fba57db2230417'){
         var msg = value.substr(11);
         TFLEnhanced.socket.send(JSON.stringify({type:"broadcast",message:msg}))
            }
        }
    },
    removeElements: function() {
        require('app/views/room/AudienceView').initRoomElements = function() {}
        require('app/views/room/AudienceView').defaultRoomElements = function(){}
        require('app/views/room/AudienceView').roomElements = []
        delete require('app/views/room/AudienceView').cactusHit
        delete require('app/views/room/AudienceView').cactus
        delete require('app/views/room/AudienceView').mountainHit
        delete require('app/views/room/AudienceView').mountain
        delete require('app/views/room/AudienceView').archHit
        delete require('app/views/room/AudienceView').arch
        delete require('app/views/room/AudienceView').cloudHit
        delete require('app/views/room/AudienceView').cloud
        require('app/base/Context').trigger('audience:redraw')
    },

    Socket: function(){
        this.socket = new SockJS('http://music.thedark1337.com:984/echo');
        this.socket.tries = 0;

        this.socket.onopen =  function() {
            this.tries = 0;
            var userInfo = API.getUser();
            this.send(JSON.stringify({
                type:    'userinfo',
                id:       userInfo.id,
                username: userInfo.username,
                room:     window.location.pathname.split('/')[1],
                version:  TFLEnhanced.toString()
            }))
        }
       this.socket.onmessage = function(msg) {
        var data = JSON.parse(msg.data);
        if(data.type === 'update'){
            TFLEnhanced.socket.onclose = function (){};
            TFLEnhanced.socket.close();
            API.chatLog('New version of TFL Enhanced Released, Update in a few seconds');
            setTimeout(function() {$.getScript('https://raw.github.com/Colgate/TFL-Enhanced/master/TFLenhanced.js')},5000)
            return;
        }
        if(data.type === 'reload'){
            API.chatLog('reloading all TFL Enhanced Script Users. Please wait a moment.')
            setTimeout(function(){location.reload();},5000);
        }
        if(data.type ==='strobe'){
            if(data.trigger =='true')
                { require ('app/views/room/AudienceView').strobeMode('true')}
            if(data.trigger =='false')
                { require ('app/views/room/AudienceView').strobeMode()}
        }
         if(data.type ==='rave'){
            if(data.trigger =='true')
                { require ('app/views/room/AudienceView').lightsOut('true')}
            if(data.trigger =='false')
                { require ('app/views/room/AudienceView').lightsOut()}
        }
        if(data.type ==='broadcast')
        {
            require('app/facades/ChatFacade').log(data.message,'update');
        }
        }
       this.socket.onclose = function() {
        this.tries++;

        var lag;
        if (this.tries <5)       lag =5;
        else if (this.tries <30) lag =30;
        else if (this.tries <60) lag =60;
        else                     return;

        setTimeout(function(){TFLEnhanced.Socket();},lag*1E3);
       }
    },

});
var TFLEnhanced = new TFLEnhancedModel;
