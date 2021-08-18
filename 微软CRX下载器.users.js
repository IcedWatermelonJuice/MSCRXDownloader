// ==UserScript==
// @name         微软CRX下载器
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  使非Edge浏览器，也能从微软扩展商店下载CRX文件
// @author       那年那tu那些事
// @include      *://microsoftedge.microsoft.com/addons/*
// @icon         https://i.loli.net/2021/08/18/mMtybsTwCBkFPW5.png
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
		buttonOBJ.style = "opacity:1;z-index: 999;cursor:pointer !important;";
		buttonOBJ.innerHTML = "<a href=" + crxurl +
			" target='_blank' style='color: white;text-decoration:none;width:100%'><b>下载CRX</b><br></a>";//pointer-events:none;
    //解除原button的禁用
    buttonOBJ.disabled=false;
    //被替换图标加上name属性,防止一直被遍历赋值
    buttonOBJ.name="newbutton";

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
      var ButtonObj=AllButtonObj[i];
			var ButtonObjID = ButtonObj.id;
      var ButtonObjName=ButtonObj.name;
				if ((ButtonObjID.search("getOrRemoveButton-") !== -1)&&(ButtonObjName==="")) {
					//从button id中获取crxid
					var crxid = ButtonObjID.slice("getOrRemoveButton-".length);
					//调用方法替换原图标
					changeButton(crxid, ButtonObj);
				}

		}
	}
	//定时循环搜索
  var crxdownloaderSetTimer=200;
	var crxdownloaderTimer=setInterval(function() {
		SearchCRXbutton();
	}, crxdownloaderSetTimer);
  console.log(crxdownloaderSetTimer+"ms定时器ID:"+crxdownloaderTimer)
})();
