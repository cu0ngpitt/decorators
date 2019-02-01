export const TEXT1 = [
  {
    description: "The ViewChild and View Children decorators are used configure view queries from a template."
  },
  {
    description: "Sometimes our components need a programmatic reference to the elements of the template and hardcoding a template reference with the hash symbol (#) is not sufficient."
  },
  {
    description: "The ViewChild and ViewChildren decorators allow us to reference template elements directly from the component class. In this example that would be our RecipeCardsComponent."
  },
  {
    description: "The change detector for ViewChild looks for the first element or the directive matching the selector in the view DOM. If the view DOM changes, and a new child matches the selector, the property is updated."
  },
  {
    description: "ViewChildren gets the QueryList of elements or directives from the view DOM. Any time a child element is added, removed, or moved, the query list will be updated, and the changes observable of the query list will emit a new value."
  }
];

export const TEXT2 = [
  {
    description: "ViewChild can reference components by their name.",
    image1: 'viewchild.html-component-ref.png',
    image2: 'viewchild.comp-component-ref.png'
  },
  {
    description: "Or they can directly query with template reference.",
    image1: 'viewchild.html-template-ref.png',
    image2: 'viewchild.comp-template-ref.png'
  },
  {
    description: "ViewChild can also query plain html/native DOM elements. You must specify the variable as type 'ElementRef', and import the class from the angular/core. NOTE: Permitting direct access to the DOM can make your application more vulnerable to XSS attacks.",
    image1: 'viewchild.html-dom-ref.png',
    image2: 'viewchild.comp-dom-ref.png'
  },
  {
    description: "If in the event you would like to query the html element and not the component itself you can add an options object to the ViewChild decorator with a read property. Then you must specify the read property as the ElementRef and also change the variable type as well.",
    image1: 'viewchild.html-dom.comp-ref.png',
    image2: 'viewchild.comp-dom.comp-ref.png'
  },
  {
    description: "NOTE: By default if you do not specify a read option and/or type for the variable, the ViewChild decorator will query the component in this case.",
    image1: 'viewchild-default.png',
    image2: ''
  }
];

export const ANGULARDOCS = [
  {
    description: "any class with the @Component or @Directive decorator"
  },
  {
    description: "a template reference variable as a string (e.g. query <my-component #cmp></my-component> with @ViewChild('cmp'))"
  },
  {
    description: "any provider defined in the child component tree of the current component (e.g. @ViewChild(SomeService) someService: SomeService)"
  },
  {
    description: "any provider defined through a string token (e.g. @ViewChild('someToken') someTokenVal: any)"
  },
  {
    description: "a TemplateRef (e.g. query <ng-template></ng-template> with @ViewChild(TemplateRef) template;)"
  }
];
