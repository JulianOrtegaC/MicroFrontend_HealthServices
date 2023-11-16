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
    numberDocument?:string;
}
export interface Service{
    idService ?:string;
    nameService:string;
    description :string;
    initialPrice :string;
    pathPhotos :string;
    address:string;
    numberDocumentUser?:string;
    datesAvailability :string;
    categorie:string;
    preview:string;
    availability:string;
}

export interface ContactService{
    telephone:string;
    email:string;
}

export interface RequestService{
    idUserPetitioner?:string;
    idUserService?:string;
    idService ?:string;
    status?:string;
    nameServices:string;
}
export interface Request{
    idUserPetitioner: string | undefined;
  idService: string | undefined;
  status: string;
  nameServices:string;
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
  