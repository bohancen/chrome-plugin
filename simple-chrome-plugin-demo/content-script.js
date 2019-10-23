
function sendMessageToBackground(message) {
	chrome.runtime.sendMessage({greeting: message}, function(response) {
		console.log(response)
	});
}

;(function() {
	console.log('这是 simple-chrome-plugin-demo 的content-script！！');
	let timer = null
	let clickTimes = 0

	document.onkeyup=function(e){
		if(e.keyCode!=87){
			return
		}
		clickTimes ++
		clearTimeout(timer)
		timer = setTimeout(function(){
			clickTimes = 0
		},200)
		if(clickTimes == 2){
			clickTimes = 0
			sendMessageToBackground('close')
		}
	}
})();