//  Source: https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/zug%C3%A4ngliche_Dropdown-Navigation under license: CC-BY-SA 3.0 (de). //

window.addEventListener("DOMContentLoaded",function() { 
"use strict"

	const navele = document.querySelector("#sitenav");
	if(!navele) return;

	// Polyfill for IE and MS-Edge if required
	//const native_details = ('open' in document.createElement("details"));
	//if (!native_details) {
	//	const script = document.createElement('script');
	//	script.src = "details-polyfill.js";
	//	document.getElementsByTagName('head')[0].appendChild(script);
	//}

	const details = navele.querySelectorAll("details");
	const summary = navele.querySelectorAll("summary");

	const button = document.createElement("button");
	button.className = "visually-hidden";
	button.innerText = "Close sub-menues";
	navele.appendChild(button);
	
	sitenav.className += " withjs";
	
	let format,width=0;
	const firstUL = navele.querySelector("ul");
	const firstLI = firstUL.querySelector("li");
  window.addEventListener("resize",resizeHandler);
	resizeHandler();

	function resizeHandler() {
		const newWidth = document.body.offsetWidth;
		if(newWidth != width) {
			width = newWidth;
			sitenav.classList.add('wide');
			details[0].setAttribute('open', 'open');
			summary[0].setAttribute('hidden', 'hidden');
			format = "wide";
			const ulHeight = firstUL.offsetHeight;
			const liHeight = firstLI.offsetHeight;
			if(liHeight*1.5 < ulHeight) {
				details[0].removeAttribute('open');
				summary[0].removeAttribute('hidden');
				format = "small";
				sitenav.classList.remove('wide');
			}
		}
	}
	
	window.addEventListener('click', klickbodyhandler);
	window.addEventListener('touchstart', klickbodyhandler);
	navele.addEventListener('keydown', keyhandler);
	navele.addEventListener('focusin', focusinhandler);
	
	function klickbodyhandler(e) {
		if(!isChildOf(e.target,details[0])) closeAll();
	}

	function keyhandler(e) { 
		if(e.keyCode == 27) {
			if(isChildOf(document.activeElement,navele)) {
				let parentDetails = findDetailsElement(document.activeElement);
				if(parentDetails) {
					if(!parentDetails.hasAttribute("open")) 
						parentDetails = findDetailsElement(parentDetails.parentNode);
					if(parentDetails && (format == "small" || findDetailsElement(parentDetails.parentNode))) {
						parentDetails.removeAttribute("open");
						parentDetails.querySelector("summary").focus();
					}
				}
			}
		} 
	}
	
	function focusinhandler(e) { 
		const is = format == "small"?0:1;
		for(let i=is;i<details.length;i++) {
			if(details[i].hasAttribute("open") && !isChildOf(e.target,details[i]))
				details[i].removeAttribute('open');
		}
	}
	
	function closeAll() {
		const is = format == "small"?0:1;
		for(let i=is;i<details.length;i++) details[i].removeAttribute('open');
	}
	
	function isChildOf(child, parent) {
		while((child = child.parentNode) && child!==parent); 
		return !!child; 
	}
	
	function findDetailsElement(child) {
		if(child && "closest" in child) return child.closest("details");
		do {
			if(child.nodeName.toLowerCase()=='details') return child;
			child = child.parentNode;
		} while(child && child!=navele);
		return null;
	} 
	
});