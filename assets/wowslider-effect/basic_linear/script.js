// basic_linear 
// options.revers - change the direction of transition
function ws_basic_linear(e,k,l){var d=jQuery,n=d(this),p=l.find(".ws_list"),q=d("<div>").addClass("ws_effect ws_basic_linear").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(l),g=d("<div>").css({position:"absolute",display:"none","z-index":2,width:"200%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(q),f=d("<div>").css({position:"absolute",left:"auto",top:"auto",width:"50%",height:"100%",overflow:"hidden"}),h=f.clone();g.append(f,h);this.go=
function(b,a,c){g.stop(1,1);c=void 0==c?!!((b-a+1)%k.length)^e.revers?"left":"right":c?"left":"right";a=d(k[a]);var m={width:a.width()||e.width,height:a.height()||e.height};a.clone().css(m).appendTo(f).css(c,0);d(k[b]).clone().css(m).appendTo(h).show();"right"==c?(f.css("left","50%"),h.css("left",0)):(f.css("left",0),h.css("left","50%"));b={};a={};b[c]=0;a[c]=-l.width();e.support.transform&&("right"==c&&(b.left=b.right,a.left=-a.right),b={translate:[b.left,0,0]},a={translate:[a.left,0,0]});p.hide();
wowAnimate(g.css({left:"auto",right:"auto",top:0}).css(c,0).show(),b,a,e.duration,"easeInOutExpo",function(){n.trigger("effectEnd");g.hide().find("div").html("")})}};
