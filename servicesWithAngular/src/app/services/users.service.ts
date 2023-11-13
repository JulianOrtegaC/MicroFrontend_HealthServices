import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EditData, Registro } from '../interfaces/cuenta';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Storage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = '/User/';
  public imgProfile!:string;

  infoData!: EditData;

  public datosPerfil!: Registro;
  public datosPerfilE!:EditData

  constructor(
    private storage: Storage,
    private http: HttpClient,
  ) {}

  patchUsers(id: string, updateModel: EditData): Observable<any> {
        return this.http.patch(
      `${this.myAppUrl}${this.myApiUrl}editUser/${id}`,updateModel ,{});
  }
  updateUser(id: string, updateModel: EditData): Observable<EditData> {
    const url = `${this.myAppUrl}/User/editUser/${id}`;
    return this.http.patch<EditData>(url, updateModel);
  }

  //metodo para obtener la imagen de Perfil.
  async  getImageImgProfile()   {
    this.infoData = this.getdatosPerfil$;

    const imagesRef = ref(
      this.storage,
      `images/${this.infoData.emailUser}/Profile/photo.png`
    );
    try {
      const url = await getDownloadURL(imagesRef);
      return url;
    } catch (error) {
      console.log('Error al obtener la URL de la imagen:', error);
      return null;
    }
  }

  getImgProfile():string{
    return this.imgProfile;
  }

    get getdatosPerfil$(): EditData {
      const objetoString = localStorage.getItem('username');
      if (objetoString) {
        this.datosPerfil= JSON.parse(objetoString);
      }
    return this.datosPerfilE;
  }


}
