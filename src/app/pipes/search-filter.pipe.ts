import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, param:any): any {
    debugger
   if(param==="")
   {
    return value;
   }
     var datavalue=value.filter((item:any)=>{
      let data=item.name.includes(param) || item.descrption.includes(param);
      return data;
   })
  
   return datavalue;
  }


  
}
