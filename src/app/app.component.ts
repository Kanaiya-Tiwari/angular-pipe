import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipe';
  public data!:string;


  public users=[
    
    {name:"pawan",
    descrption:"pawan is an good boy"}
    ,
  {
  name:"raman",
  descrption:"raman is an good boy"
  },
    { name:"rahul",
    descrption:"rahul is an good boy"
  }
  ]
  // getData(value:any)
  // {
  //   // 
  //   var datavalue=this.user.find((item)=>{
  //      let data=item.name.includes(value) || item.descrption.includes(value);
  //      return data;
  //   })
  //   console.log(datavalue);
  // }
  
}
