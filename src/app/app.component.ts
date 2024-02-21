import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit{

  weatherData:any
  cityName:string=''
  temprature:number = 0
  temp_max:number = 0
  temp_min:number = 0
  huminity:number = 0
  wind:number = 0
  name:string=''
  unites='metric'
  hotWeather :boolean= false


  constructor(private authService:AuthService){}
  ngOnInit(): void {
    
  }
  title = 'wheather-app';

  getWeatherData(){
    this.authService.getWheatherData(this.cityName,this.unites).subscribe({
      next:(response)=>{
        this.weatherData = response
        this.temprature=response.main.temp;
        this.name = response.name
      
        this.temp_max = response.main.temp_max
        this.temp_min = response.main.temp_min
        this.huminity = response.main.humidity
        this.wind = response.wind.speed
      },
      error:(error)=>{
        alert(error.error.message)
        console.log(error)
      },
      complete:()=>{
        console.log("successfully completed")
      }
    })

  }


}
