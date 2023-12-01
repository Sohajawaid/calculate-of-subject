var userName = prompt("EnteryourName");
var age = prompt("Enterage");
var mt = prompt("Enter the mark of math out off 100");
var sc = prompt("Enter the mark of science out off 100");
var cp = prompt("Enter the mark of computer out off 100");
var isl = prompt("Enter the mark of islamiyat out off 100");
var en = prompt("Enter the mark of english out off 100");
var total = Number(mt)+Number(sc)+Number(cp)+Number(isl)+Number(en)
var avg = Number(total)/5;
var pc = Number(total)*100/500;
document.write("total marks of subj"+total);
document.write("<br>Average="+avg);
document.write("<br>percentage="+pc);