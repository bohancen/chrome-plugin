// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log('收到来自content-script的消息：');
	console.log(request, sender, sendResponse);
	sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
	if(request.greeting=='close'){
		let tabId = sender.tab.id
		let windowId = sender.tab.windowId
		console.log(chrome.tabs)
		chrome.tabs.remove(tabId, function(){
			console.log('close')
		})
		// getCurrentTabId((tabId) => {
		// 	chrome.windows.remove(tabId, function(){
		// 		console.log('close')
		// 	})
		// })
	}
});
