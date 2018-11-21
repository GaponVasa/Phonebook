console.log("createDataBase");

var dataBase = {
	data:[
		// {
		// 	type : "private person",
		// 	firstName : "Михаил",
		// 	lastName : "Клубук",
		// 	number : "(099) 96-37-331",
		// 	eMail : "kps_buh@google.com"
		// },
		// {
		// 	type : "legal entity",
		// 	name : "Творческий центр \"Сирин\"",
		// 	contactPerson : "генеральный директор",
		// 	fNlN : "Ольга Прасол",
		// 	number : "(097) 49-33-559",
		// 	eMail : "OGALYCH@ukr.net"
		// },
		// {
		// 	type : "legal entity",
		// 	name : "OOO \"Телеоптик\"",
		// 	contactPerson : "контактное лицо",
		// 	fNlN : "Наталья Гупало",
		// 	number : "(066) 63-12-847",
		// 	eMail : "Bart@ukrpost.net"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Ольга",
		// 	lastName : "Нечитайло",
		// 	number : "(063) 36-06-534",
		// 	eMail : "Bart@hotmail.com"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Людмила",
		// 	lastName : "Нечитайло",
		// 	number : "(092) 44-60-517",
		// 	eMail : "OGALYCH@ukrpost.net"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Владислав",
		// 	lastName : "Прасол",
		// 	number : "(063) 53-88-113",
		// 	eMail : "Ush_buh@ukr.net"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Дмитрий",
		// 	lastName : "Иваненко",
		// 	number : "(066) 87-94-326",
		// 	eMail : "Bart@ukr.net"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Владислав",
		// 	lastName : "Гупало",
		// 	number : "(099) 92-39-245",
		// 	eMail : "rdaniluk@google.com"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Владислав",
		// 	lastName : "Иваненко",
		// 	number : "(067) 97-43-757",
		// 	eMail : "madonion@i.ua"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Сергей",
		// 	lastName : "Иваненко",
		// 	number : "(099) 11-87-045",
		// 	eMail : "gnnaboiko@i.ua"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Петр",
		// 	lastName : "Прасол",
		// 	number : "(099) 06-35-791",
		// 	eMail : "madonion@online.ua"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Андрей",
		// 	lastName : "Гупало",
		// 	number : "(097) 29-19-451",
		// 	eMail : "zarp@google.com"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Екатерина",
		// 	lastName : "Иваненко",
		// 	number : "(093) 53-05-620",
		// 	eMail : "OGALYCH@i.ua"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Дмитрий",
		// 	lastName : "Гупало",
		// 	number : "(096) 53-94-910",
		// 	eMail : "estavatUnny@meta.ua"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Лидия",
		// 	lastName : "Прасол",
		// 	number : "(063) 79-15-280",
		// 	eMail : "an_km@yahoo.com"
		// },
		// {
		// 	type : "legal entity",
		// 	name : "OOO \"Телеоптик\"",
		// 	contactPerson : "директор",
		// 	fNlN : "Владислав Прасол",
		// 	number : "(068) 09-69-920",
		// 	eMail : "Bart@yahoo.com"
		// },
		// {
		// 	type : "legal entity",
		// 	name : "ЧAO \"Констар\"",
		// 	contactPerson : "генеральный директор",
		// 	fNlN : "Николай Петрухненко",
		// 	number : "(098) 87-76-133",
		// 	eMail : "madonion@hotmail.com"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Михаил",
		// 	lastName : "Перебийнос",
		// 	number : "(099) 21-00-355",
		// 	eMail : "Ush_buh@ukr.net"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Татьяна",
		// 	lastName : "Петренко",
		// 	number : "(095) 12-89-419",
		// 	eMail : "estavatUnny@ukrpost.net"
		// },
		// {
		// 	type : "private person",
		// 	firstName : "Петр",
		// 	lastName : "Иваненко",
		// 	number : "(098) 12-68-115",
		// 	eMail : "gnnaboiko@yahoo.com"
		// }
		]};


dataBase.__proto__.generateRandomDataBase = function(num){

	let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

	let randomPhone = () => {
		let number = "";
		for(let i = 1; i < 8; i++){
			i == 2 || i == 4 ?	number = number + random(0, 9) + "-" :	number += random(0, 9);
		};
		return number;
	};

	let randomConstr = (obj, constr ,bog) =>{
		if(bog >= 4){
			dataBase.data.push(new constr(obj, "boy"));
		}else{
			dataBase.data.push(new constr(obj, "girl"));
		};
	};

	function Person(myObj, gender){
		this.type = myObj.type[0];
		if(gender == "boy"){
			this.firstName = myObj.boyFirstName[random(0, myObj.boyFirstName.length - 1)];
		}else{
			this.firstName = myObj.girlFirstName[random(0, myObj.girlFirstName.length - 1)];
		};
		this.lastName = myObj.lastName[random(0, myObj.lastName.length - 1)];
		this.number = "(" + myObj.numberCode[random(0, myObj.numberCode.length - 1)]  + ") " + randomPhone();
		this.eMail = myObj.eMailFirst[random(0, myObj.eMailFirst.length - 1)] + "@" + myObj.eMailSecond[random(0, myObj.eMailSecond.length - 1)];
	};

	function Firm(myObj, gender){
		this.type = myObj.type[1];
		this.name = myObj.nameFirm[random(0, myObj.nameFirm.length - 1)];
		this.contactPerson = myObj.contactPerson[random(0, myObj.contactPerson.length - 1)];
		if(gender == "boy"){
			this.fNlN = myObj.boyFirstName[random(0, myObj.boyFirstName.length - 1)] + " " + myObj.lastName[random(0, myObj.lastName.length - 1)];
		}else{
			this.fNlN = myObj.girlFirstName[random(0, myObj.girlFirstName.length - 1)] + " " + myObj.lastName[random(0, myObj.lastName.length - 1)];
		};
		this.number = "(" + myObj.numberCode[random(0, myObj.numberCode.length - 1)]  + ") " + randomPhone();
		this.eMail = myObj.eMailFirst[random(0, myObj.eMailFirst.length - 1)] + "@" + myObj.eMailSecond[random(0, myObj.eMailSecond.length - 1)]; 
	};

	let boyOrGirl = random(1, 7);
	for(let i = 1; i <= num; i++){
		if(random(1, 10) > 3){
			randomConstr(myData, Person, boyOrGirl);
		}else{
			randomConstr(myData, Firm, boyOrGirl);
		};
		boyOrGirl = random(1, 7);
	};
};

myData = {
	type:["private person", "legal entity"],
	boyFirstName:["Василий","Иван", "Николай", "Петр", "Сергей", "Дмитрий", "Вячеслав", "Владислав", "Александр", "Михаил", "Юрий", "Андрей"],
	lastName:["Петрухненко", "Иваненко", "Петренко", "Нечитайло", "Гупало", "Прасол", "Сидоренко", "Перебийнос", "Водолазкий", "Клубук"],
	girlFirstName:["Наталья", "Юлия", "Ольга", "Светлана", "Людмила", "Уляна", "Екатерина", "Татьяна", "Оксана", "Лидия", "Тамара"],
	numberCode:["050", "063", "066", "067", "068", "091", "092", "093", "094", "095", "096", "097", "098", "099"],
	eMailFirst:["estavatUnny", "gnnaboiko", "Bart", "an_km", "kps_buh", "madonion", "nik125", "OGALYCH", "rdaniluk", "solist", "Ush_buh", "zarp"],
	eMailSecond:["google.com", "ukr.net", "ukrpost.net", "ua.fm", "yahoo.com", "online.ua", "i.ua", "meta.ua", "hotmail.com"],
	nameFirm:["OOO \"Новая эпоха\"", "OOO \"КСМ ПРОТЕК\"", "ЧAO \"Констар\"", "ПAO \"СВЕМОН-ЗАХИД\"", "OOO \"Телеоптик\"", "Гостиница \"Атлас\"", "Кафе \"Альф\"", "Творческий центр \"Сирин\"", "OOO \"ЭКОСТАЙЛ\""],
	contactPerson:["директор", "генеральный директор", "президент", "председатель правления", "контактное лицо"]
};