console.log("db");

class dataBase {
	constructor(){
		this.data = [];
	};

	generateRandomDataBase(num){
		let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

		let randomPhone = (obj) => {
			let number = "";
			for(let i = 1; i < 8; i++){
				i == 2 || i == 4 ?	number = number + random(0, 9) + "-" :	number += random(0, 9);
			};
			return "(" + obj.numberCode[random(0, obj.numberCode.length - 1)]  + ") " + number;
		};

		let randomEmail = (obj, numFirstName, numLastName, gender) =>{
			let arrLength;
			let randSecondEmail = obj.eMailSecond[random(0, obj.eMailSecond.length - 1)];
			arrLength = obj.lastName[numLastName].nikname.length;
			let randomNiknameLastName = obj.lastName[numLastName].nikname[random(0, arrLength - 1)];
			let randomNikameFirstName;
			if(gender == "boy"){
				arrLength = obj.boyFirstName[numFirstName].nikname.length;
				randomNikameFirstName = obj.boyFirstName[numFirstName].nikname[random(0, arrLength - 1)];
			}else{
				arrLength = obj.girlFirstName[numFirstName].nikname.length;
				randomNikameFirstName = obj.girlFirstName[numFirstName].nikname[random(0, arrLength - 1)];
			};
			
			switch(random(0, 5)){
				case 0: return randomNikameFirstName + "." + randomNiknameLastName + "@" + randSecondEmail;
				break;
				case 1: return randomNiknameLastName + "." + randomNikameFirstName + "@" + randSecondEmail;
				break;
				case 2: return randomNikameFirstName + "_" + randomNiknameLastName + "@" + randSecondEmail;
				break;
				case 3: return randomNiknameLastName + "_" + randomNikameFirstName + "@" + randSecondEmail;
				break;
				case 4: return randomNikameFirstName + "@" + randSecondEmail;
				break;
				case 5: return randomNiknameLastName + "@" + randSecondEmail;
				break;
			};
		};

		let randomConstr = (obj, constr ,bog) =>{
			if(bog >= 4){
				this.data.push(new constr(obj, "boy"));
			}else{
				this.data.push(new constr(obj, "girl"));
			};
		};

		function Person(myObj, gender){
			//this.type = myObj.type[0];
			let numberFirstName;
			let numberLastName = random(0, myObj.lastName.length - 1);
			if(gender == "boy"){
				numberFirstName = random(0, myObj.boyFirstName.length - 1);
				this.firstName = myObj.boyFirstName[numberFirstName].name;
			}else{
				numberFirstName = random(0, myObj.girlFirstName.length - 1);
				this.firstName = myObj.girlFirstName[numberFirstName].name;
			};
			this.lastName = myObj.lastName[numberLastName].name;
			this.number = randomPhone(myObj);
			this.eMail = randomEmail(myObj, numberFirstName, numberLastName, gender);
		};

		// function Firm(myObj, gender){
		// 	this.type = myObj.type[1];
		// 	this.name = myObj.nameFirm[random(0, myObj.nameFirm.length - 1)];
		// 	this.contactPerson = myObj.contactPerson[random(0, myObj.contactPerson.length - 1)];
		// 	if(gender == "boy"){
		// 		this.fNlN = myObj.boyFirstName[random(0, myObj.boyFirstName.length - 1)] + " " + myObj.lastName[random(0, myObj.lastName.length - 1)];
		// 	}else{
		// 		this.fNlN = myObj.girlFirstName[random(0, myObj.girlFirstName.length - 1)] + " " + myObj.lastName[random(0, myObj.lastName.length - 1)];
		// 	};
		// 	this.number = "(" + myObj.numberCode[random(0, myObj.numberCode.length - 1)]  + ") " + randomPhone();
		// 	this.eMail = myObj.eMailFirst[random(0, myObj.eMailFirst.length - 1)] + "@" + myObj.eMailSecond[random(0, myObj.eMailSecond.length - 1)]; 
		// };

		let boyOrGirl = random(1, 7);
		for(let i = 1; i <= num; i++){
			// if(random(1, 10) > 3){
				randomConstr(myData, Person, boyOrGirl);
			// }else{
			// 	randomConstr(myData, Firm, boyOrGirl);
			// };
			boyOrGirl = random(1, 7);
		};
	};

	displayDataBase(){
		const table = document.querySelector("table");
		const thead = newTag("thead");
		const tbody = newTag("tbody");
		let tr = newTag("tr");
		let th = newTag("th");
		let td = newTag("td");
		let headName = ["FirstName", "LastName", "PhoneNumber", "E-mail"];

		headName.forEach(element => {
			th.textContent = element;
			tr.append(th);
			th = newTag("th");
		});
		thead.append(tr);
		tr = newTag("tr");
		table.append(thead);
		this.data.forEach(element => {
			let arrElement = Object.keys(element);
			arrElement.forEach(element1 => {
				td.textContent = element[element1];
				tr.append(td);
				td = newTag("td");
			})
			tbody.append(tr);
			tr = newTag("tr");
		});
		table.append(tbody);

		function newTag(elemName){
			return document.createElement(elemName);
		};
	};

	addUser(myNewObj){

		function Person(myObj){
			//this.type = myObj.type;
			this.firstName = myObj.firstName;
			this.lastName = myObj.lastName;
			this.number = myObj.number;
			this.eMail = myObj.eMail;
		};

		// function Firm(myObj){
		// 	this.type = myObj.type;
		// 	this.name = myObj.name;
		// 	this.contactPerson = myObj.contactPerson;
		// 	this.fNlN = myObj.fNlN;
		// 	this.number = myObj.number;
		// 	this.eMail = myObj.eMail; 
		// };

		// if(myNewObj.type == "private person"){
			this.data.push(new Person(myNewObj));
		// }else if(myNewObj.type == "legal entityn"){
		// 	this.data.push(new Firm(myNewObj));
		// }else{
		// 	console.log("ERROR! Empty parametr type in myNewObj");
		// };
	};

	deleteUser(fN, lN){
		let elementDelete;
		this.data.forEach((el, ind, arr) => {
			if(el.firstName == fN){
				if(el.lastName == lN){
					elementDelete = ind;
				};
			};
		});
		this.data.splice(elementDelete, 1);

	};

	findUser(param){
		let arrResult = [];
		this.data.forEach((el, ind, arr) => {
			let arrObjKey = Object.keys(el);
			arrObjKey.some((el1, ind1, arr1) => {
				if(el[el1] == param){
					//return ind;
					arrResult.push(ind);
				}
			})
		});
		console.log(arrResult);
	}

	sortDataBase(param){
		return this.data.sort((a, b) => {
			if (a[param] < b[param]){ 
				return -1;
			};
			if (a[param] > b[param]){
				return 1;
			};
			return 0;
	    });
	};

	changeDataUser(){

	};

	clearMainTable(){
		const table = document.getElementById("table");
		while (table.firstChild) {
		    table.removeChild(table.firstChild);
		};
	};
};