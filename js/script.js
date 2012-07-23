$(document).ready(function()
{
	$.getJSON("./cards.php", {}, function(json)
	{
		var left = 0;
		var top = 0;		
		$.each(json, function(i, val)
		{
			top = left = top + 20;
			$('#business-cards').append('<div id="card'+val.id+'" class="card"></div>');
			$('#card'+val.id)
					.append('<div id="close'+val.id+'" class="close">'+val.id+'</div>')
					.append('<div class="company">'+val.company+'</div>')
					.append('<div class="firstName">'+val.firstName+'</div>')
					.append('<div class="lastName">'+val.lastName+'</div>')
					.append('<div class="post">'+val.post+'</div>')
					.append('<div class="phone">phone: '+val.phone+'</div>')
					.append('<div class="skype">skype: '+val.skype+'</div>')
					.append('<div class="www">www: '+val.www+'</div>')
					.css({position: "absolute", left: left, top: top});
		});
	});
});
window.onclick = function ()
{
	var button = document.getElementsByClassName("card");
	for(var key in button)
	{
		button[key].onclick = TalkAboutButton;
	}
}
function TalkAboutButton()
{
	$('.card').css({zIndex: 'auto'});
	$('#'+this.id).css({zIndex: 1000});
}
/**/