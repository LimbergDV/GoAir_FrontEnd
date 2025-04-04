export interface ApplicationListDTO {
    data: ApplicationData[];
    links: {
      self: string;
    };
    status: boolean;
  }
  
  export interface ApplicationData {
    Id_application: number;
    First_name: string;
    Last_name: string;
    Status_application: string;
    Id_user: number;
  }
  