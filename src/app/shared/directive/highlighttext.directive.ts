import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlighttext]'
})
export class HighlighttextDirective implements OnChanges {
  @Input() highlighttext = " ";
  @Input() highlightColor = 'yellow';
   originalHtML = " ";
  constructor(

    private element : ElementRef
  ) {
    // console.log("hello")
    // console.log(this.element)
   }

  //  A lifecycle hook that reacts to input property changes.
   ngOnChanges(changes: SimpleChanges):void{
    //  console.log(changes);

     const {currentValue, firstChange} = changes ['highlighttext']
     if(firstChange){
      this.originalHtML = this.element.nativeElement.innerHTML;
      return
     }

    //  This RegExp is used to find occurrences of the currentValue in the original HTML content.
    // The regular expression is case-insensitive (gi flags),
    //  and parentheses are used to capture the matched text.
     if(currentValue){
      const regexp = new RegExp(`(${currentValue})`, 'gi');


      // The matched text is wrapped in a <span> tag with a background color
      // specified by a class property this.highlightColor:
      this.element.nativeElement.innerHTML = this.originalHtML.replace(regexp,
        `<span style="background-color:${this.highlightColor}">\$1</span>`)

     }else{
      this.element.nativeElement.innerHTML = this.originalHtML
     }

   }

}
