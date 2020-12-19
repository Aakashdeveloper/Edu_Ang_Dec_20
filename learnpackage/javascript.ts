////
Nagation
/////
var a = true
undefined
!a
false
var b = false
undefined
!b
true
var a = 1
undefined
!a
false

----------------------
var a = 10
undefined
a>10?"Hii":"Bie"
"Bie"
a==10?"Hii":"Bie"
"Hii"
a==10?a+1:a-1
11
a>10?a+1:a-1
9



https://www.codecademy.com/learn
https://github.com/Aakashdeveloper/JavaScript-Interview-Question


true+true
2

"10"+20+"30"-1
102029

10+"20"+30-1
102029

10+20+"30"-1
3029


var > we are able to redeclare and reassign
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10;

var a; declare
a = 10 assignment

> var a =10
undefined
> a
10
> var a = 20
undefined
> a
20
> a=30
30
> a
30
>


> let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b=22
22

> const c = 20
undefined
> c
20
> const c = 21
Uncaught SyntaxError: Identifier 'c' has already been declared
> c =21
Uncaught TypeError: Assignment to constant variable.
> 


var city = "lOnDOn"
> "London"


city.charAt(0).toUpperCase()
"L"

city.slice(1).toLoweCase()
"ondon"

"London"

city.charAt(0).toUpperCase()+city.slice(1).toLoweCase()


ng-untouched  ng-pristine ng-valid
ng-touched    ng-dirty    ng-invalid