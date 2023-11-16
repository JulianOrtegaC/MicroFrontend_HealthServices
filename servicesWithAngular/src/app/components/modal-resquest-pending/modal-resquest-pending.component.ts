import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditData, RequestService } from 'src/app/interfaces/cuenta';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-modal-resquest-pending',
  templateUrl: './modal-resquest-pending.component.html',
  styleUrls: ['./modal-resquest-pending.component.css']
})
export class ModalResquestPendingComponent implements OnInit, AfterViewInit{
  dataProfile!: EditData;
  auxNumber: string  = "";
   idUserServiceAux!: string;
   idServiceAux!: string;

  displayedColumns: string[] = [
    'ID SOLICITANTE',
    'ESTADO',
    'ACEPTAR',
    'RECHAZAR'
  ];
  ngOnInit(): void {
 
  }

  constructor(    private servicesService: ServicesService    ){
    this.idUserServiceAux=servicesService.getIdUserServiceAux();
    this.idServiceAux=servicesService.getIdServiceAux();
    this.getRequest();
    
  }
  @ViewChild('paginatorCompras') paginatorCompras!: MatPaginator;

  dataSource = <any>[];
  paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginatorCompras;

  }

  getRequest() {
 
      this.servicesService
        .getMyServicesRequest(this.idUserServiceAux,this.idServiceAux)
        .subscribe((data) => {
          console.log("que me traes lindo" +JSON.stringify(data));
          this.dataSource = new MatTableDataSource<RequestService>(data);
          this.dataSource.paginator = this.paginator;
        });
  }
  aceptarRequest(){
    this.servicesService
    .getMyServicesRequest
  }

  rechazarRequest(idRequest:number){
    this.servicesService.patchStatusRequest(idRequest,"rechazada").subscribe((data) => {
   
    });
}}
