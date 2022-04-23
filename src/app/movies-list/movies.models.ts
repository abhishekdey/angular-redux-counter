export interface Movies {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface Users {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
      street: string;
      suite: string;
      zipcode: string;
    };
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
