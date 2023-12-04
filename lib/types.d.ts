export type PickDropData = {
  location: string;
  date: Date;
};

export type CarData = {
  _id?: string;
  carId: number;
  carName: string;
  category: 'Sport' | 'SUV' | 'MPV' | 'Sedan' | 'Coup' | 'Hatchback';
  description?: string;
  gasoline: number;
  steeringMode: 'Manual' | 'Auto';
  capacity: number;
  currentRent: number;
  actualRent?: number;
  imageUrl?: string;
};

export type UserType = {
  _id?: string;
  username: string;
  email: string;
  password: string;
  favorites?: string[];
  rentals?: RentDataType[];
};

export type RentDataType = {
  carId: string;
  rentStartingDate: Date;
  rentEndingDate: Date;
};
