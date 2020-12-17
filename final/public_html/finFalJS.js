// Patrick L. Mackey CIS119 Prof. K. Miller 12172020

document.write("sales stuff");
let high;
let low;
let counter = 1;
let total = 0;
let dailySales=[];
let i;
while(dailySales.length <= 6){
    dailySales.unshift(Number(prompt("Enter a sales total for the day!")));
    total = total += dailySales[i];
    counter++;
}
addSales();
function addSales(){
    weeklyTotal = dailySales[0]+dailySales[1]+dailySales[2]+dailySales[3]+dailySales[4]+dailySales[5]+dailySales[6];
   document.write("<br>$"+ weeklyTotal + "  are this week's sales totals!");
   avarage= weeklyTotal/7;
   document.write("<br>$ "+avarage+" is the average daily sales total");
  high  = dailySales.reduce(function(a,b){return Math.max(a,b);});
  document.write('<br>$'+ high +"  was the highest one day total sales");
  low = dailySales.reduce(function(a,b){return Math.min(a,b);});
  document.write("<br>$"+ low+ " is the lowest one day sales total");
  
}
//i didnt use a for of loop








document.write("<br>SUNDAY:$"+ dailySales[0]+ "<br>MONDAY:$"+ dailySales[1]+"<br>TUESDAY:$"+ dailySales[2]+ "<br>WEDNESDAY:$"+ dailySales[3]+"<br>THURSDAY:$"+dailySales[4]+"<br>FRIDAY:$"+dailySales[5]+"<br>SATURDAY:$"+dailySales[6]);