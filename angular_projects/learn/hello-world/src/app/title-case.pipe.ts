import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;


    let words = value.split(' '); //split by a space
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      // if (i > 0 && prepositions.includes(words[i].toLowerCase())) {     // checking if this code is in the list of prepositions ...too complicated code
      if (i > 0 && this.isPreposition(word)) {
        word = words[i].toLowerCase();
      } else {
        words[i] = this.toTitleCase(words[i]);
      }
    }

    return words.join(' ');

  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of', 'the'
    ];

    return prepositions.includes(word.toLowerCase()) 
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
