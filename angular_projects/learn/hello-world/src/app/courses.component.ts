// create a component

import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    //inbuilt pipes
    selector: 'courses',
    template: `
    <!-- {{ course.title | uppercase | lowercase }} <br> -->
    <!-- {{ course.students | number}} <br> -->
    <!-- {{ course.rating | number:'1.2-2'}} <br> -->  <!--number is the format..here 1 is the minimum number of digits to display before decimal point..2-2 means min 2 and max 2 after decimal point..if you use 1-1, it'll round the digits-->
    <!-- {{ course.price | currency:'INR':true:'3.2-2'}} <br> -->
    <!-- {{ course.releaseDate | date:'shortDate'}} -->


    <!-- custom pipes -->
    {{ text | summary:15 }}      <!-- summarizing the long line using custom pipe -->


    
    `
})

export class CoursesComponent {
    // course = {
    //     title: 'Complete Angular Course',
    //     rating: 4.9745,
    //     students: 30123,
    //     price: 190.95,
    //     releaseDate: new Date(2021, 5, 21)
    // }

    text = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `
}