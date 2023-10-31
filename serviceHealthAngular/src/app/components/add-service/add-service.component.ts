import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { City, Department, EditData, Service } from 'src/app/interfaces/cuenta';
import { ServicesService } from 'src/app/services/services.service';
import {
  Storage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';
import { RegisterService } from 'src/app/services/register.service';
import { delay } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit {

  departments!:Department[];
  cities!:City[];
  city!:string;
  department!:number;
  constructor(
    private storage: Storage,
    private servicesService: ServicesService,
    private router: Router,
    private registerService: RegisterService
  ) {}
  ngOnInit(): void {

    this.servicesService.cargarDepartment().subscribe({
      next:(res:any)=>{
        this.departments =res;
        console.log(this.departments);
      },
      error:(err)=>{
        console.log(err.message)
      }
    });
  }

  loadCities(){
    console.log('este es el departamento'+this.department)
    this.servicesService.cargarCities(this.department ).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.cities=res;
        console.log('si me trae la ciudad' +this.cities)
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }
  imagenes: string[] = [];

  // datos Servicio
  infoData!: EditData;
  categoria!: string;
  nameService!: string;
  preview!: string;
  description!: string;
  initialPrice!: number;
  pathPhotos: any[] = [];
  address!: string;
  dispo!:string;
  datesDispo!: string;
  file: any[] = [];
  // fin datos Servicio

  @ViewChild('myDate') myDate: any;
  // aqui lo de data
  openCalendar() {
    this.myDate.nativeElement.click();
  }

  //fin de lo del data

  // lo de las imagenes

  cargarImagen($event: any): void {
    const file1 = $event.target.files[0];
    this.file.push(file1);
    const lector = new FileReader();
    lector.readAsDataURL(file1);
    lector.onload = () => {
      this.imagenes.push(lector.result as string);
    };
  }

 

  async addServicio() {
    this.infoData = this.registerService.getdatosPerfil$;
  
    for (let index = 0; index < this.file.length; index++) {
      const imgRef = ref(
        this.storage,
        `images/${this.infoData.Email}/services/${this.nameService}/${this.file[index].name}`
      );
  
      try {
        const response = await uploadBytes(imgRef, this.file[index]);
      } catch (error) {
        console.log(error);
      }
    }
  
    try {
      await this.getImages();
  
      const dataService = {
        categoria: this.categoria,
        nameService: this.nameService,
        description: this.description,
        initialPrice: this.initialPrice,
        pathPhotos: JSON.stringify(this.pathPhotos),
        address: this.address,
        datesDispo: this.datesDispo,
        preview: this.preview,
        idUser:this.registerService.getdatosPerfil$.IdUser,
        dispo:this.dispo,
      };
  console.log("este es el servicio a agregar"+dataService)
      this.servicesService.crearService(dataService).subscribe({
        next: (res: any) => {
          this.router.navigate(['profile']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  async getImages() {
    const imagesRef = ref(this.storage, `images/${this.infoData.Email}/services/${this.nameService}`);
  
    try {
      const response = await listAll(imagesRef);
  
      for (let item of response.items) {
        const url = await getDownloadURL(item);
        const ImagenService = { imagen: url };
        this.pathPhotos.push(ImagenService);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
}
