import { CarData } from './types';

const models = [
  'Toyota Corolla',
  'Honda Civic',
  'Ford F-150',
  'Chevrolet Silverado',
  'Ram 1500',
  'Toyota Camry',
  'Nissan Altima',
  'Honda Accord',
  'Hyundai Elantra',
  'Kia Forte',
  'Toyota RAV4',
];

export const generateCars = (count: number): CarData[] => {
  const cars: CarData[] = [];
  for (let i = 0; i < count; i++) {
    const currentCar: CarData = {
      carName: models[Math.floor(Math.random() * 10)],
      category: 'Sport',
      capacity: Math.ceil(Math.random() * 4),
      steeringMode: 'Manual',
      gasoline: Math.floor(Math.random() * 30) + 70,
      carId: Math.ceil(Math.random() * 2000) + 1000,
      currentRent: Math.floor(Math.random() * 60) + 50,
    };
    if (Math.random() < 0.3)
      currentCar.actualRent =
        currentCar.currentRent + Math.floor(Math.random() * 40);
    cars.push(currentCar);
  }
  return cars;
};
