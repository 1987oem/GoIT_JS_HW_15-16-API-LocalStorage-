function Human () {
	this.name = 'Jack';
	this.age = '25 years';
	this.gender = 'male';
	this.height = '180 sm';
	this.weight = '85 kg'
};

function Worker () {
};
function Student () {
};

Worker.prototype = new Human();
Student.prototype = new Human();

Worker.prototype.toWork = function (name, workplace, salary) {
	this.workplace = workplace;
	this.salary = salary;
};

Student.prototype.toStudy  = function (studyplace, scholarship) {
	this.studyplace = studyplace;
	this.scholarship = scholarship;
};
// console.log(Student.prototype.toStudy);

var Worker1 = new Worker;
var Worker2 = new Worker;
var Worker3 = new Worker;
var Student1 = new Student;
var Student2 = new Student;
var Student3 = new Student;

Worker1.toWork('John', 'Google', '100.000 USD');
Worker2.toWork( 'Apple', '110.000 USD');
Worker3.toWork('FB', '90.000 USD');
Student1.toStudy ('Harvard', '30.000 USD');
Student2.toStudy ('Cambridge', '20.000 USD');
Student3.toStudy ('Oxford', '25.000 USD');

console.log(Worker1);
console.log(Worker2.__proto__);
console.log(Worker3.__proto__);
console.log(Student1);
console.log(Student2.__proto__);
console.log(Student3.__proto__);
