// create a component

import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    //     template: `
    //         <h2>
    //             {{ title }}     <!--string interpolation this way is good for rendering headings, paras, divs and spans -->
    //         </h2>
    //        <!-- <img src="{{ imageUrl }}"/>   -->  <!--this is called as string interpolation...below we do proprty binding-->
    //         <img [src]="imageUrl" />       <!--this is called property binding..its good to use for images and other content -->
    //         <!-- proprty binding works only in 1 way..from component to DOM -->
    //         <table>
    //             <tr>
    //                 <td [attr.colspan] = "colSpan"></td>
    //             </tr>
    //         </table>
    // <!-- 
    //         <ul>
    //             <li *ngFor="let course of courses">
    //                 {{ course }}
    //             </li>

    //         </ul> -->

    //         `
    template: `
            <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> -->    <!-- class binding here using class.active : it is a propert binding variation-->
            <!-- <button [style.backgroundColor]="isActive? 'blue' : 'white'">Save</button> -->         <!-- style binding here...we use DOM style object properties and set color based on active state : it is also a propert binding variation-->
            <div (click)="onDivClicked()">
                <button (click)="onSave($event)">Save</button> <!-- event binding here to handle events raised from the DOM...like keystrokes, mouse movements, clicks, etc -->
            </div>
            `
})

export class CoursesComponent {
    // title = "List of courses";
    // // // courses;     // real-world app gets data from a service here
    // // // so we create a service file... 'courses.service.ts' ...check that
    // imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
    // colSpan = 2;

    isActive = false;
    // onSave() {
    //     console.log("button was clicked");  // check DOM console to check the log..this works with event handling
    // }
    onDivClicked() {
        console.log("Div was clicked");     // check DOM console..button click will trigger this event too.. this one click leads to multiple events....
                                            // this is called as Event Bubbling...DOM calls all events if they're in one DIV...to stop this we use 'stop.propogation'..see below
    }
    onSave($event) {
        $event.stopPropagation(); // this event will stop event bubbling...only triggers the event in the method defined...check DOM console
        console.log("button was clicked", $event);  // event showing the position of x,y coordinates of a mouse..$event object represents standard DOM event
        // check DOM console after clicking the button
    }


    /*     constructor(service: CoursesService) {
            // let service = new CoursesService();   //init the service object
            this.courses = service.getCourses();    // this tightly couples the service object
            // every change we make in the courses, we make it back in the service object...
            // so we implement Dependency Injection
            // we instruct angular to implement the dependencies using the constructor
    
            // we should register our dependencies into our module..
        } */

}

// ------------------Step-1 ends here--------------------------

// Step-2 : register your component in the <module>                     </module>e></module>e></module>e></module>e></module>e></module>e></module>e></module>e></module>e></module>e></module>e></module>e></module>e></module>
// currently we just have one module which is app module in the /src/app/app.module.ts
// we add it in the @ngmodule declarations...see there


// Step-2 ends here--------------------------------------------

//Step-3: add an element in an HTML markup

// go-to app.component.html -> it is our external template for AppComponent
// it has code for angular start-page....remove everthing and add ur html template
// see there.............