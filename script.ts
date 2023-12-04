
// Практическое задание № 5. Модуль 2.
// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
// ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
// ВВЕДЕНИЕ В ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ
// ПРОГРАММИРОВАНИЕ.

// Задание 1
// Реализовать класс Button, который содержит ширину, высоту,
// текст кнопки и метод showBtn(), который выводит кнопку на экран
// с помощью тега button и функции document.write().
// Реализовать класс BootstrapButton, унаследовав его от класса
// Button. Добавить поле color и переопределить метод showBtn()
// так, чтобы кнопка выводилась со стилями и указанным цветом.

// function show(btn){
//     let btns = document.querySelectorAll('button');
//     btns.forEach(function(btn){
//       btn.classList.remove('active');
//     });
//     btn.classList.add('active');
// }

// Задание 1. Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в про-
// центах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.

// class Marker {
//     сred;
//     pred;

//     constructor(c, p) {
//       this.c = c;
//       this.p = p;
//     }
//     get markerProps() {
//       return [this.c, this.p];
//     }
  
//     set markerProps(newProps) {
//       [this.c, this.p] = [...newProps];
//     }
  
//     print(line) {
//       let t = document.getElementById("content");
//       for (let i = 0; i < line.length; i++) {
//         if (this.p != 0) {
//           if (line[i] == " ") {
//             this.p += 0.5;
//           }
//           t.innerHTML += line[i];
//           t.style.color = this.c;
//           this.p -= 0.5;
//         } else {
//           document.write("Marker is over");
//           break;
//         }
//       }
//     }
//   }
  
//   class FilledMarker extends Marker {
//     fill(p) {
//       if (p > 100) {
//         p = 100;
//       } else {
//         this.p += p;
//       }
//     }
//   }
  
//   let marker = new FilledMarker("#838", 2);
  
//   marker.fill(31);
  
//   const l = `List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department`;
  
//   marker.print(l);
//   document.body.setAttribute("style", "font-size: 18px; text-align: center;")


//   Задание 3. Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//   Реализовать класс EmpTable для генерации html кода таблицы
//   со списком работников банка. Массив работников необходимо
//   передавать через конструктор, а получать html код с помощью
//   метода getHtml().
//   Создать объект класса EmpTable и вывести на экран результат
//   работы метода getHtml().

// const mainDiv = document.getElementById("content");

// const tableDiv = document.createElement("div");
// tableDiv.setAttribute("id", "content__tableDiv");
// tableDiv.className = "content__tableDiv";

// const tableTag = document.createElement("table");
// tableTag.setAttribute("id", "content__table");
// tableTag.className = "content__table";

// tableDiv.append(tableTag);
// mainDiv.append(tableDiv);

// class Employee {
//   constructor(name, position, department, salary) {
//     this.name = name;
//     this.position = position;
//     this.department = department;
//     this.salary = salary;
//   }
// }
// const arrEmp = [
//   new Employee("John Doe", "Manager", "Sales", 5000),
//   new Employee("Bill Freeman", "Manager", "Sales", 5000),
//   new Employee("Uno Dirck", "Manager", "Sales", 5000),
//   new Employee("Erick Rapid", "Manager", "Sales", 5000),
//   new Employee("Chris Rea", "Manager", "Sales", 5000),
//   new Employee("Tommy Lee", "Manager", "Sales", 5000),
//   new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 3500),
//   new Employee(
//     "Rick Depper",
//     ".Net Senior Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee("Neo Matrix", "Team Lead", "Desktop Solutions", 5000),
//   new Employee(
//     "Trinity Matrix",
//     ".Net Senior Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Rick Grouy",
//     ".Net Junior Developer",
//     "Desktop Solutions",
//     1000
//   ),
//   new Employee(
//     "George McCalister",
//     ".Net Junior Developer",
//     "Desktop Solutions",
//     1000
//   ),
//   new Employee(
//     "Fred Durst",
//     ".Net Junior Developer",
//     "Desktop Solutions",
//     1000
//   ),
//   new Employee(
//     "Piter Parker",
//     ".Net Middle Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Bro Somebody",
//     ".Net Senior Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Merlin Mysterier",
//     ".Net Middle Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Harry Potter",
//     ".Net Senior Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee(
//     "Norton Commander",
//     ".Net Middle Developer",
//     "Desktop Solutions",
//     4000
//   ),
//   new Employee("Elon Musk", ".Net Senior Developer", "Desktop Solutions", 4000)
// ];
// class EmpTable {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   getHtml() {
//     const table = document.getElementById("content__table");
//     const array = this.arr;
//     const head = document.createElement("tr");
//     head.setAttribute("style", "font-size: 18px;");
//     const th1 = document.createElement("th");
//     th1.textContent = "Name";
//     const th2 = document.createElement("th");
//     th2.textContent = "Position";
//     const th3 = document.createElement("th");
//     th3.textContent = "Department";
//     const th4 = document.createElement("th");
//     th4.textContent = "Salary ($)";
//     head.append(th1);
//     head.append(th2);
//     head.append(th3);
//     head.append(th4);
//     table.append(head);
//     for (let i in array) {
//       let tr = document.createElement("tr");
//       table.append(tr);
//       for (let j in array[i]) {
//         let td = document.createElement("td");
//         td.textContent = array[i][j];
//         tr.append(td);
//         td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
//       }
//     }
//     table.setAttribute("border", "2");
//     table.setAttribute("bordercolor", "brown");
//     table.setAttribute("width", "60%");
//     table.setAttribute("style", "margin: auto; background-color: lightgrey;");
//   }
// }
// const tableObj = new EmpTable(arrEmp);
// tableObj.getHtml();


// var Space = (function () {
//     function Space() {
//         this.canvas = document.createElement('canvas');
//         this.ctx = this.canvas.getContext('2d');
//         this.particles = [];
//         this.ratio = window.innerHeight < 400 ? 0.6 : 1;
//         this.r = 120;
//         this.counter = 0;
//     }
//     Space.prototype.init = function () {
//         this.createElement();
//         this.loop();
//     };
//     Space.prototype.createElement = function () {
//         var scale = this.ratio;
//         this.canvas.width = window.innerWidth;
//         this.canvas.height = window.innerHeight;
//         this.canvas.style.width = '100%';
//         this.canvas.style.background = 'rgb(0, 0, 0)';
//         this.ctx.transform(scale, 0, 0, -scale, this.canvas.width / 2, this.canvas.height / 2);
//         document.body.appendChild(this.canvas);
//         for (var i = 0; i < 450; i++) {
//             this.createParticle();
//         }
//     };
//     Space.prototype.createParticle = function () {
//         this.particles.push({
//             color: Math.random() > 0.5 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
//             radius: Math.random() * 5,
//             x: Math.cos(Math.random() * 7 + Math.PI) * this.r,
//             y: Math.sin(Math.random() * 7 + Math.PI) * this.r,
//             ring: Math.random() * this.r * 3,
//             move: ((Math.random() * 4) + 1) / 500,
//             random: Math.random() * 7
//         });
//     };
//     Space.prototype.moveParticle = function (p) {
//         p.ring = Math.max(p.ring - 1, this.r);
//         p.random += p.move;
//         p.x = Math.cos(p.random + Math.PI) * p.ring;
//         p.y = Math.sin(p.random + Math.PI) * p.ring;
//     };
//     Space.prototype.resetParticle = function (p) {
//         p.ring = Math.random() * this.r * 3;
//         p.radius = Math.random() * 5;
//     };
//     Space.prototype.disappear = function (p) {
//         if (p.radius < 0.8) {
//             this.resetParticle(p);
//         }
//         p.radius *= 0.994;
//     };
//     Space.prototype.draw = function (p) {
//         this.ctx.beginPath();
//         this.ctx.fillStyle = p.color;
//         this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         this.ctx.fill();
//     };
//     Space.prototype.loop = function () {
//         this.ctx.clearRect(-this.canvas.width , -this.canvas.height, this.canvas.width * 2, this.canvas.height * 2);
//         if (this.counter < this.particles.length) {
//             this.counter++;
//         }
//         //this.ctx.shadowBlur = 20;
//         //this.ctx.shadowColor = "#fff";
//         for (var i = 0; i < this.counter; i++) {
//             this.disappear(this.particles[i]);
//             this.moveParticle(this.particles[i]);
//             this.draw(this.particles[i]);
//         }
//         requestAnimationFrame(this.loop.bind(this));
//     };
//     return Space;
// })();
// window.onload = function () {
//     var space = new Space();
//     space.init();
// };