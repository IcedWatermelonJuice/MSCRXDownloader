// ==UserScript==
// @name         微软CRX下载器
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  使非Edge浏览器，也能从微软扩展商店下载CRX文件
// @author       那年那tu那些事
// @match        *://microsoftedge.microsoft.com/addons/*
// @icon         https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true
// ==/UserScript==

(function() {
	//替换原图标
	function changeButton(crxid, buttonOBJ) {
		//crxid一般为32位,防出错
		crxid = crxid.slice(0, 32);
		//crxid写入URL
		var crxurl =
			"https://edge.microsoft.com/extensionwebstorebase/v1/crx?response=redirect&acceptformat=crx3&x=id%3D" +
			crxid + "%26installsource%3Dondemand%26uc";
		//替换内容、样式、功能
		buttonOBJ.style = "opacity:1;z-index: 9999;cursor:pointer !important;";
		buttonOBJ.innerHTML = "<a href=" + crxurl +
			" target='_blank' style='color: white;text-decoration:none;'><b>下载CRX</b><br></a>";
		buttonOBJ.onclick = function() {
			window.open(crxurl);
		}

		//隐藏原提示语
		var buttonPare = buttonOBJ.parentElement;
		if (buttonPare.children.length === 2) {
			if (buttonPare.children[1].getAttribute("aria-live") === "polite") {
				buttonPare.children[1].style.display = "none";
			}
		}
	}
	//搜索获取图标
	function SearchCRXbutton() {
		//获取所有button对象
		var AllButtonObj = document.getElementsByTagName("button");
		//遍历所有button,找到“获取”图标(button id:getOrRemoveButton-xxxxxx)
		for (let i = 0; i < AllButtonObj.length; i++) {
			var ButtonObjID = AllButtonObj[i].getAttribute("id");
			if (ButtonObjID !== null) {
				if (ButtonObjID.search("getOrRemoveButton-") !== -1) {
					//从button id中获取crxid
					var crxid = ButtonObjID.slice("getOrRemoveButton-".length);
					//调用方法替换原图标
					changeButton(crxid, AllButtonObj[i]);
				}
			}

		}
	}
	//定时循环搜索
	setInterval(function() {
		SearchCRXbutton();
	}, 100);
})();
