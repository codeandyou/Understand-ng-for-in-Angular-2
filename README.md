# Understand ng-for in Angular 2

http://www.codeandyou.com/2015/10/understand-ng-for-in-angular-2.html

NgFor directive is use for iterate items in a templates. NgFor run as a loop in the collection and bind data into html template. 

Its work similar to ng-repeat work on Angular 1.x.

When any item add into collection, a new template is added into DOM element. Similar things also happen when item removed from collection , its create new templates and reload into DOM when any action happen with collection.
If Anything changes in collection , templates recreate and load into DOM.

#  Basic syntax of ng-for is

``` ng-for #item [ng-for-of]="items" #i="index" ```

# Short hand syntax of ng-for is

```*ng-for="#item of items"```


# Example 

```<ul>
  <li *ng-for="#items of collections; #i = index">
    {{items }}
  </li>
</ul>
```

#Syntax

```
Short Hand Syntax - <li *ng-for="#item of items; #i = index">...</li>
Basic Syntax-  <li template="ng-for #item of items; #i = index">...</li>
<template ng-for #item [ng-for-of]="items" #i="index"><li>...</li></template>
```

# Annotations

####Directive 
```
@Directive({selector: '[ng-for]'})
 ```
 
# ng-for Example

#### index.html

```
<!DOCTYPE html>
<html>
<title>Understand ng-for in Angular 2</title>
<head>
  <script src="https://jspm.io/system@0.18.17.js"></script>
  <script src="https://code.angularjs.org/2.0.0-alpha.37/angular2.min.js"></script>
  <script>
    System.config({
      paths: {
        'app.js': 'app.js'
      }
    });
    System.import('app.js');
  </script>
</head>
<body>
  <myApp> </myApp>
</body>
</html>
```


#### app.es6.js

```
//Import Angular
import {
   Component, View, NgFor, bootstrap
}
from 'angular2/angular2';
///Define a component
// Annotation section
//@Component annotations
@
Component({
      selector: 'myApp'
   })
   //@View annotations
   @ View({
      templateUrl: 'template.html',
      directives: [NgFor]
   })
   // AngularJs 2 component controller
class AngularController {
   constructor() {
      this.employees = [{
         'name': 'Paul Mo',
         'id': '1001',
         'empCode': 'EMP_PAUL'
      }, {
         'name': 'Martin So',
         'id': '1002',
         'empCode': 'EMP_MARTIN'
      }, {
         'name': 'Leon Bery',
         'id': '1003',
         'empCode': 'EMP_LEON'
      }];
   }
}
bootstrap(AngularController);
```

#### template.html

``` <hr>
<h1> 
Basic use of ng-for in Angular 2
 </h1>
<div>
   <ul type="none">
      <li template="ng-for #emp of employees; #i = index">
         <p>{{emp.name}}</p>
      </li>
   </ul>
</div>
<h1> 
Use of ng-for in Angular 2 in short hand
 </h1>
<div>
   <ul type="none">
      <li *ng-for="#emp of employees">
         <p> <b> Name</b> - {{emp.name}} ,<b>  ID </b> </b>- {{emp.id}} , <b>    Employee Code</b> - {{emp.empCode}}
            </p>
      </li>
   </ul>
</div>
<hr>
<h1> 
Get collection index in ng-for Angular 2
 </h1>
<div>
   <ul type="none">
      <li *ng-for="#emp of employees; #i = index">
         <p> <b>Index  - {{i}}</b>
            <br> <b> Name</b> - {{emp.name}} </p>
      </li>
   </ul>
</div>
```





