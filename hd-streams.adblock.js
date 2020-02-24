// // // // // // // // // // // // // // // // // // // // //
// this tool was developed by thirtysix						//
// discord contact: ThirtySix#6977							//
// all rights reserved to the owner of the code				//
// // // // // // // // // // // // // // // // // // // // //

setInterval(function(e) {
    if ( document.querySelectorAll("iframe").length != 0 ) {
        document.querySelectorAll("iframe").forEach(function(e){
            if ( e.id != "36" ) {
                let daddy = e.parentNode;
                let src = e.src;
                let btn = document.createElement("div");
                let height = window.innerHeight / 100 * 80;
                btn.innerHTML = '<div style="text-align: center; color: #3279a8; font-size: 24px;">Ad\'s removed by ThirtySix</div>';
                btn.innerHTML += '<iframe allowfullscreen id="36" style="width: 100%; height: '+height+'px;" sandbox="allow-scripts" src="'+src+'"></iframe>';
                btn.style = "";
                btn.href = src;
                daddy.innerHTML = "";
                daddy.appendChild(btn);
                setTimeout(function(x){console.log("ads removed by 36");},1000);
            } 
        })
    }     
}, 1000);
