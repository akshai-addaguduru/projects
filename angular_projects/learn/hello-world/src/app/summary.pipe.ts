import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'     // in our markup we use summary as the keyword
})
export class SummaryPipe implements PipeTransform {     //check PipeTransform implements method
    transform(value: string, limit?: number) {
        //basic summarizing algorithm 
        if(!value)
            return null;

            let actualLimit = (limit) ? limit : 50;     // passing our limit ? if not setting default limit to 50chars
        return value.substr(0,actualLimit); + '...'
    }
}