"use strict"

var jsonString = '{"text": "text"}';

window.onload = BeginDownload();

function BeginDownload() {
	var windowHeight = document.documentElement.clientHeight;
	var windowWidth = document.documentElement.clientWidth;
	for (var i = 0; i < Math.floor((windowHeight - 20) / 70) + 1; i++)
	{
		for (var j = 0; j < Math.floor((windowWidth - 60) / 120); j++)
		{
			CreateItem();
		}
	}
}

function CreateItem()
{
	var elem = JSON.parse(jsonString);
	$("<div class='item'>").html(elem.text).appendTo($(".main-container"));
	$("</div>").appendTo($(".main-container"));
	$("div.item").last().css("background-color", function () {
		var hex = Math.floor(Math.random() * 0xFFFFFF);
  		return "#" + ("000000" + hex.toString(16)).substr(-6);
	});
}

$(window).scroll(function() 
{
    if  ($(window).scrollTop() == $(document).height() - $(window).height()) 
    {
    	var windowHeight = document.documentElement.clientHeight;
		var windowWidth = document.documentElement.clientWidth;
		for (var i = 0; i < 2; i++)
			{
				for (var j = 0; j < Math.floor((windowWidth - 60) / 120); j++)
				{
					CreateItem();
				}
			}
 	}
});