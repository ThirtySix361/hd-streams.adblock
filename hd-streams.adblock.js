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
				if ( src.includes("youtube.com/embed/") ) { sandbox = "allow-scripts allow-same-origin" } else { sandbox = "allow-scripts" }
				if ( !src.includes("google.com/") && src != "") {
					let btn = document.createElement("div");
					btn.innerHTML = '<div style="text-align: center; color: #3279a8; font-size: 24px;">Ad\'s removed by ThirtySix</div>';
					btn.innerHTML += '<iframe allowfullscreen id="36" style="width: 100%;" sandbox="'+ sandbox +'" src="'+src+'"></iframe>';
					btn.style = "";
					btn.href = src;
					daddy.innerHTML = "";
					daddy.appendChild(btn);
					setTimeout(function(x){
						document.querySelector('iframe[id="36"]').height = window.innerHeight * 0.75;
						console.log("ads removed by 36");
					},1000);
				}
			}
		})
	}
}, 1000);

window.addEventListener('resize', function() {
	if ( document.querySelectorAll("iframe").length != 0 ) {
		document.querySelectorAll("iframe").forEach(function(e){
			if ( e.id == "36" ) {
				e.height = window.innerHeight * 0.75;
			}
		}) 
	}
});