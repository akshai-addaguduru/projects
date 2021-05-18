// create a component

import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>
            {{ title }}
        </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>    <!-- Special function of angular 'ngFor' -->

        </ul>
        
        `
})

export class CoursesComponent {
    title = "List of courses";
    courses;     // real-world app gets data from a service here
    // so we create a service file... 'courses.service.ts' ...check that

    constructor(service: CoursesService) {
        // let service = new CoursesService();   //init the service object
        this.courses = service.getCourses();    // this tightly couples the service object
        // every change we make in the courses, we make it back in the service object...
        // so we implement Dependency Injection
        // we instruct angular to implement the dependencies using the constructor

        // we should register our dependencies into our module..
    }

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