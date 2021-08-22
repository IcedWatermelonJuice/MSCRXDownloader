// ==UserScript==
// @name         微软CRX下载器
// @namespace    http://tampermonkey.net/
// @version      0.13
// @description  使非Edge浏览器，也能从微软扩展商店下载CRX文件
// @author       那年那tu那些事
// @include      *://microsoftedge.microsoft.com/addons/*
// @icon         https://i.loli.net/2021/08/18/mMtybsTwCBkFPW5.png
// ==/UserScript==
(function() {
	//判断是否为detail页
	function checkURL() {
		var URLType;
		if (window.location.pathname.search("/detail") !== -1) {
			URLType = "detail";
		} else {
			URLType = "others";
		}
		return URLType;
	}
	//changeButton方法用于替换原图标
	function changeButton(crxid, buttonOBJ) {
		//crxid写入下载器URL
		var downloaderURL =
			"https://edge.microsoft.com/extensionwebstorebase/v1/crx?response=redirect&acceptformat=crx3&x=id%3D" +
			crxid + "%26installsource%3Dondemand%26uc";
		//替换内容、样式、功能
		buttonOBJtextClass=buttonOBJ.children[0].className;
		buttonOBJ.style = "min-width: 100px !important;opacity:1;z-index: 9999;cursor:pointer !important;margin-inline-end: 8px;";
		buttonOBJ.innerHTML = "<a class="+buttonOBJtextClass+" href=" + downloaderURL +
			" target='_blank' style='color: white;text-decoration:none;width:100%'><b>下载 CRX</b></a>";
		//解除button的禁用
		buttonOBJ.disabled = false;
		//被替换图标加上name属性,防止一直被遍历赋值
		buttonOBJ.name = "ISnewButton";
		//detail页专属设置
		if (checkURL() === "detail") {
			//图标宽度设置
			buttonOBJ.style.width="max-content";
			//隐藏原有polite
			var politePareOBJ = buttonOBJ.parentElement.children;
			for (let i = 0; i < politePareOBJ.length; i++) {
				if (politePareOBJ[i].getAttribute("aria-live") === "polite") {
					politePareOBJ[i].style.display = "none";
				}
			}
		}
	}
	//SearchCRXbutton方法用于搜索需要替换的原图标
	function SearchCRXbutton() {
		//获取所有button对象
		var AllButtonObj = document.getElementsByTagName("button");
		//遍历所有button,找到“获取”图标(button id:getOrRemoveButton-xxxxxx)
		for (let i = 0; i < AllButtonObj.length; i++) {
			var ButtonObj = AllButtonObj[i];
			var ButtonObjID = ButtonObj.id;
			var ButtonObjName = ButtonObj.name;
			if ((ButtonObjID.search("getOrRemoveButton-") !== -1) && (ButtonObjName !== "ISnewButton")) {
				//从button id中获取crxid
				var crxid = ButtonObjID.slice("getOrRemoveButton-".length);
				//crxid一般为32位
				crxid = crxid.slice(0, 32);
				//调用方法替换原图标
				changeButton(crxid, ButtonObj);
			}
		}
	}
	//CRXdownloaderMain方法为脚本入口main
	function CRXdownloaderMain() {
		//设置定时器,单位ms
		var crxdownloaderSetTimer = 100;
		//启动定时器
		var crxdownloaderTimer = setInterval(function() {
			SearchCRXbutton();
		}, crxdownloaderSetTimer);
		//控制台输出定时器ID,可随时通过控制台停止
		console.log(crxdownloaderSetTimer + "ms定时器ID:" + crxdownloaderTimer);
	}
	//调用Main方法
	CRXdownloaderMain();
})();
