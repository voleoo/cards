$(document).ready(function()
{
	$.getJSON("./cards.php", {}, function(json)
	{
		$.each(json, function(i, val)
		{
			$('#cards').append('<div id="card'+val.id+'" class="card"></div>');
			$('#card'+val.id).append('<div class="id">card numder: '+val.id+'</div>')
					.append('<div class="firstName">Имя: '+val.firstName+'</div>')
					.append('<div class="lastName">Фамилия: '+val.lastName+'</div>')
					.append('<div class="middleName">Отчество: '+val.middleName+'</div>')
					.append('<div class="company">Компания: '+val.company+'</div>')
					.append('<div class="post">Должность: '+val.post+'</div>')
					.append('<div class="phone">phone: '+val.phone+'</div>')
					.append('<div class="skype">skype: '+val.skype+'</div>')
					.append('<div class="www">www: '+val.www+'</div>');
		});
	});
});
