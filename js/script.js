//window.setInterval("upDateTable()", 10000);

function cards(){
	var url = './cards.php';
	var page = loadPage(url);
	var array = JSON.parse(page);
	if(!document.getElementById('cards')){
		var newElem = document.createElement("div");
			newElem.id = 'cards';
			//newElem.appendChild(document.createTextNode('id'));
			document.body.appendChild(newElem);
	}
	for (key in array){
		addCards(array);
	}
}
function addCards(array){	
	var newElem = document.createElement("div");
	newElem.id = 'card' + array[key].id;
	newElem.className = 'card';
	newElem.appendChild(document.createTextNode('card numder '+array[key].id));	
	document.getElementById("cards").appendChild(newElem);
	
	addFirstName(array);
	addLastName(array);
	addMiddleName(array);
	addCompany(array);
	addPost(array);
	addPhone(array);
	addSkype(array);
	addWww(array);
}
function addFirstName(array){
	var newElem = document.createElement("div");
	newElem.className = 'firstName';
	newElem.appendChild(document.createTextNode('Имя: '+array[key].firstName));
	document.getElementById('card' + array[key].id).appendChild(newElem);
}
function addLastName(array){
	var newElem = document.createElement("div");
	newElem.className = 'lastName';
	newElem.appendChild(document.createTextNode('Фамилия: '+array[key].lastName));
	document.getElementById('card' + array[key].id).appendChild(newElem);
}
function addMiddleName(array){
	var newElem = document.createElement("div");
	newElem.className = 'middleName';
	newElem.appendChild(document.createTextNode('Отчество: '+array[key].middleName));
	document.getElementById('card' + array[key].id).appendChild(newElem);
}
function addCompany(array){
	var newElem = document.createElement("div");
	newElem.className = 'company';
	newElem.appendChild(document.createTextNode('Компания: '+array[key].company));
	document.getElementById('card' + array[key].id).appendChild(newElem);
}
function addPost(array){
	var newElem = document.createElement("div");
	newElem.className = 'post';
	newElem.appendChild(document.createTextNode('Должность: '+array[key].post));
	document.getElementById('card' + array[key].id).appendChild(newElem);
}
function addPhone(array){
	var newElem = document.createElement("div");
	newElem.className = 'phone';
	newElem.appendChild(document.createTextNode('phone: '+array[key].phone));
	document.getElementById('card' + array[key].id).appendChild(newElem);
}
function addSkype(array){
	var newElem = document.createElement("div");
	newElem.className = 'skype';
	newElem.appendChild(document.createTextNode('skype: '+array[key].skype));
	document.getElementById('card' + array[key].id).appendChild(newElem);
}
function addWww(array){
	var newElem = document.createElement("div");
	newElem.className = 'www';
	newElem.appendChild(document.createTextNode('www: '+array[key].www));
	document.getElementById('card' + array[key].id).appendChild(newElem);
}



/////////////////////////////////////////////////////////////////////////////////////
function loadPage(url){ // минимальная функция дня нормальных браузеров
	load = methodRequest();
	load.open('GET', url, false);
	load.send(null);
	if(load.status == 200) {
	  return load.responseText;
	}
}
function methodRequest(){
	return new XMLHttpRequest();
}