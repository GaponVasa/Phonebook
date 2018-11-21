// ПРИЛОЖЕНИЕ ТЕЛЕФОННЫЙ СПРАВОЧНИК.


let basePhoneNumber = new dataBase();
basePhoneNumber.generateRandomDataBase(100);
console.log(basePhoneNumber);

// let newPerson = {
// 					//type : "private person", 
// 					firstName : "Николай", 
// 					lastName : "Сидоренко", 
// 					number : "(093) 34-98-145",
// 					eMail : "NikSid@ukr.net"
// 				};

// basePhoneNumber.addUser(newPerson);
basePhoneNumber.displayDataBase();
// basePhoneNumber.deleteUser("Николай", "Сидоренко");
// basePhoneNumber.findUser("Прасол");
// basePhoneNumber.clearMainTable();
// basePhoneNumber.displayDataBase();