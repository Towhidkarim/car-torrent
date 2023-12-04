export type PickDropData = {
  location: string;
  date: Date;
};

export type CarData = {
  _id?: string;
  carId?: number;
  carName: string;
  // category: 'Sport' | 'SUV' | 'MPV' | 'Sedan' | 'Coup' | 'Hatchback';
  category: string;
  description?: string;
  gasoline: number;
  // steeringMode: 'Manual' | 'Auto';
  steeringMode: string;
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
  admin?: boolean;
};

export type RentDataType = {
  carId: string;
  rentStartingDate: Date;
  rentEndingDate: Date;
};
