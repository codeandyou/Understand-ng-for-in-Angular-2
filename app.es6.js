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