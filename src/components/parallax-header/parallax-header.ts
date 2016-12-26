import { Directive } from '@angular/core';

/*
  Generated class for the ParallaxHeader directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[parallax-header]' // Attribute selector
})
export class ParallaxHeader {

  constructor() {
    console.log('Hello ParallaxHeader Directive');
  }

}
