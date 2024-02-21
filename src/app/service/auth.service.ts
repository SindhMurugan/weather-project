import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  getWheatherData(cityName:string ,unites:string):Observable<any>{
    // return this.http.get(environment.wheatherApiBaseUrl , {
    //   headers: new HttpHeaders().set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIHostHeaderValue)
    //   .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
    //   params:new HttpParams().set('q',cityName).set('units','metric').set('mode' , 'jdon')
    // })

    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=c0012b4b1ebc564be23e4b3fffb25942&units='+unites)

  }

}
