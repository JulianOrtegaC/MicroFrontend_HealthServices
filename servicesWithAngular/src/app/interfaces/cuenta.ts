export interface Registro {
    idUser: string;
    nameUser: string;
    lastNameUser: string;
    birthDate: Date;
    email: string;
    typeDocument: string;
    gender: string;
    password: string;
}


export interface EditData {
    idUser?:string;
    nameUser?: string;
    lastnameUser?: string;
    addressUser?: string;
    telephoneUser?: string;
    emailUser?: string;
    typeDocument?: string;
    gender?: string;
    Photo?: string;
    CoverPhoto?: string;
    birthdate?: string;
}
export interface Service{
    numberDocumentUser?:string;
    idService ?:string;
    categorie:string;
    nameService:string;
    description :string;
    preview:string;
    initialPrice :number;
    pathPhotos :string;
    address:string;
    datesDispo :string;
    dispo:string;
}

export interface ContactService{
    telephone:string;
    email:string;
}

export interface RequestService{
    userIdUser?:string;
    serviceIdService ?:string;
    nameService?:string;
    status?:string;
}

export interface Department{
    codeDepartment: number;
    nameDepartment: string;
  }
  export interface City{
    idCity: number;
    nameCity: string;
    codeDepartment: number;
  }
  