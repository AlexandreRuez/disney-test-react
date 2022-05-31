declare global {
    interface Access { icon: string; value: string; }

    interface Rating { value: number; reviews: number; }

    interface Services { icon: string; value: string; }

    interface User { 
        id: number; 
        mail: string; 
        phone: string;
        title: string;
        firstName: string; 
        lastName: string; 
        adressLine1: string; 
        adressLine2: string; 
        postcode: string; 
        city: string; 
        country: string;
    }
    
    interface Hotel { 
        id: number; 
        name: string; 
        image: string; 
        ranking: number; 
        access: Access[]; 
        rating: Rating; 
        description: string; 
        roomDescription: string; 
        services: Services[]; 
        disclaimer : boolean;
        price: number;
    }

    interface Option { 
        id: number; 
        title: string;
        description: string; 
        detailedDescription: string;
        image: string;
        price: number;
        startTime: string;
    }

    interface optionsSelected {
        id: number, 
        option: number, 
        date: string, 
        startTime: string 
     }
  }

  export {}