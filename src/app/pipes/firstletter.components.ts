import { PipeTransform, Pipe } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({ name: 'firstLetter' }
)
export class firstLetterPipe implements PipeTransform {
    transform(value: string): string {
     return value.split(' ').map(valueSplit =>  valueSplit[0]).join('');
    }
}
//velu priya ==> [v,p]