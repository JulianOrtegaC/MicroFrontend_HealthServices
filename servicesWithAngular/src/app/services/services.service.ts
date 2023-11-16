import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EditData, Registro, RequestService, Service } from '../interfaces/cuenta';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private myAppUrl: string = environment.endpoint;
  private microUsers: string = environment.urlAPIMicroServicesUser;
  private microRequest: string = environment.urlAPIMicroServicesRequest;
  private myApiUrl: string = '/api/services/';
  private myApiUrlAdd: string = '/api/services/addService/';
  private myApiUsers: string = '/api/MyUser/';
  private myApiUrlR: string = '/api/request/';
  userID = '';
  private userID$ = new BehaviorSubject<string>(this.userID);

  public datosPerfil!: EditData;
  public idUserServiceAux!: string;
  public idServiceAux!: string;
  constructor(private http: HttpClient) {}


  getIdUserServiceAux(){
    return this.idUserServiceAux;
  }
  getIdServiceAux(){
    return this.idServiceAux;
  }
  setInfoRequestServices(idUserService:string , idService:string){
    this.idUserServiceAux=idUserService;
this.idServiceAux=idService;
  }
  crearService(services: Service): Observable<any> {
    services.initialPrice=""+services.initialPrice;
    return this.http.post("https://localhost:7183/api/services/addService/",services,{});

  }


  getServices(): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}listServices`);
  }

  getMyServices( numberDocument:string): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}listServicesByIdUser?numberDocumentUser=${numberDocument}`);
  }
  getContactServices( number_document:string): Observable<any> {
    return this.http.get(`${this.microUsers}${this.myApiUsers}dataContactService?number_document=${number_document}`);
    // return this.http.get(`https://localhost:7137${this.myApiUsers}dataContactService?number_document=${number_document}`);
  }

  crearRequest(request: RequestService): Observable<any> {
    return this.http.post(
      `${this.microRequest}${this.myApiUrlR}createRequest/`,
      request
    );
  }

  getMyRequest( idUser:string): Observable<any> {
    return this.http.get(`${this.microRequest}${this.myApiUrlR}getRequestsByUsers?idUserPetitioner=${idUser}`);
  }
  getMyServicesRequest( idUserService:string, idService:string): Observable<any> {
    return this.http.get(`${this.microRequest}${this.myApiUrlR}getServicesAndRequest?idService=${idService}&idUserService=${idUserService}`);
  }
  deleteRequest( serviceId:string , idUserPetitioner:string): Observable<any> {
    return this.http.delete(`${this.microRequest}${this.myApiUrlR}deleteRequest?serviceId=${serviceId}&idUserPetitioner=${idUserPetitioner}`);
  }

  deleteService( serviceId:string): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}deleteService?serviceId=${serviceId}`);
  }

  patchStatusRequest(idRequest:number,status:String ){
    return this.http.get(`${this.microRequest}${this.myApiUrlR}patchRequest?idRequest=${idRequest}&status=${status}`);

  }
  cargarDepartment():Observable<any>{
    return this.http.get(`${this.myAppUrl}/Department/`)
    }
    
      cargarCities(idDepartment:number): Observable<any>{
        return this.http.get(`${this.myAppUrl}/Department/GetCities?codigoDepartamento=${idDepartment}`,{});
      }

  
}
