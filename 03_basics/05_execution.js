/*javascript execution

[code] -> global EC -> referd to this variable

1. Global execution context
2. function execution context
3. eval execution context

[code] --> Memory creation phase 
       --> execution phase

+++++++++++++ steps +++++++++++++++++++

step1:
global execution--->this

step2:
memory phase(variables are created only)
val1-->undefiened
val2-->undefiened
addnum-->defination
result1-->undefiened
result2-->undefiened

step3:
execution phase
val1<--10
val2<--5
addnum---> new execution context[new variable environment+execution thread]

for new exection: part(1) memory phase:- val1-->undefiened
                                         val2-->undefiened
                                         total-->undefiened
                  part(2) execution context:- num1-->10
                                              num2-->5
                                              total-->15(returns to global exection context)
this new execution context gets deleted
similerly the same steps happens for result2

*/

let val1=10
let val2=5
function addnum(num1,num2){
       let total=num1+num2
       return total
}
let result1=addnum(val1,val2)
let result2=addnum(10,2)

/*
++++++++++++++++++ call stack ++++++++++++++++++++++++

after functions call it goes in global EC & gets execute then function gets out

this follows LIFO rule (last in first out)

*/