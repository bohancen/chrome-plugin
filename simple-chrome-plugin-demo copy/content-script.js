;(function() {
	// document.querySelectorAll('a').forEach(function(el){
	// 	let href = el.getAttribute('href')
	// 	if(href && href.indexOf('/video/av')>-1){
	// 		el.href = 'https://www.bilibili.com' + href
	// 		el.setAttribute('rel','noreferrer')
	// 		el.rel = 'noreferrer'
	// 	}
	// })

	function parents(node,parentNodeType){
		for(let i=0;i<10;i++){
			let p = node.parentElement
			if(p &&p.nodeName.toLowerCase() == parentNodeType.toLowerCase()){
				return p
			}
		}
		return null
	}
	
	document.body.onclick=function(e){
		let el = parents(e.target,'a')
		if(el){
			let href = el.getAttribute('href')
			if(href && href.indexOf('/video/av')>-1){
				// e.preventDefault()
				el.href = 'https://www.bilibili.com' + href
				el.setAttribute('rel','noreferrer')
				el.rel = 'noreferrer'
			}
		}
	}

})();

