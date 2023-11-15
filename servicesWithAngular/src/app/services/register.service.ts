import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EditData, Registro } from '../interfaces/cuenta';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = "/Login/Register/"
  private myApiUrlL: string = "/Login/"
  userID= "";
  private userID$ = new BehaviorSubject<string>(this.userID)
  public idActual$!:string;

  public datosPerfil!:EditData

  constructor(private http: HttpClient) { }

  register(register : Registro): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,register); 
  }
  login(userName: string, password: string): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrlL}?userName=${userName}&password=${password}`, {});
  }
  get actualID$(): Observable<string> {
    return this.userID$.asObservable();
  }

  setDatosProfile(data:EditData){
    localStorage.setItem('dataProfile' ,JSON.stringify(data));
      this.datosPerfil=data;
  }
  setactualID(documentNumber: string) {
    this.userID$.next(documentNumber);
    this.idActual$=documentNumber;
  }

  get getdatosPerfil$(): EditData {
      const objetoString = localStorage.getItem('data_user');
      if (objetoString) {
        this.datosPerfil= JSON.parse(objetoString);
        console.log(this.datosPerfil);
      }
    return this.datosPerfil;
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  // dataquemada(){
  //   const ejemploDatos: EditData = {
  //     IdUser: "1",
  //     NameUser: "Juan",
  //     LastNameUser: "Pérez",
  //     Address: "123 Calle Principal",
  //     Telephone: "555-555-5555",
  //     Email: "juan.perez@example.com",
  //     TypeDocument: "DNI",
  //     Gender: "Masculino",
  //     Photo: "https://content.wepik.com/statics/20906796/preview-page0.jpg",
  //     CoverPhoto: "https://i.pinimg.com/736x/5e/9a/c6/5e9ac63909b062e1d7b67e30e1dee7b0.jpg",
  //     BirthDate: "1990-05-15"
  // };
  // this.setDatosProfile(ejemploDatos);
 
  // }
}
