import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'onlyOneError'
})
export class onlyOneErrorPipe implements PipeTransform{
transform(allErrors: any, errorPriority:string[]): any {
    
    if(!allErrors)
    {
        return null;
    }
    const onlyOneError:any={};

    for(let error of errorPriority){
        if(allErrors[error])
        {
            onlyOneError[error] = allErrors[error];
            break;
        }
    }
    return onlyOneError;
}
}