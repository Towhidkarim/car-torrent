'use client';
import React, { useState } from 'react';
import { categories } from '@/lib/constants';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { CarData } from '@/lib/types';
import { useToast } from '../ui/use-toast';

const AddPage = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Sport');
  const [description, setDescription] = useState('');
  const [gasoline, setGasoline] = useState(0);
  const [capacity, setCapacity] = useState(2);
  const [steering, setSteering] = useState('Manual');
  const [rent, setRent] = useState(0);
  const [actualRent, setActualRent] = useState<number | undefined>();

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    const newCarData: CarData = {
      carName: name,
      capacity,
      category,
      gasoline,
      steeringMode: steering,
      currentRent: rent,
      actualRent,
      description,
    };
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const reqBody = JSON.stringify(newCarData);
    setLoading(true);
    const res = await fetch(`http://localhost:3000/api/cars?data=${reqBody}`, {
      method: 'POST',
    });
    if (!res.ok) {
      setLoading(false);
      toast({ variant: 'destructive', description: 'Something Went Wrong' });
    } else {
      setLoading(false);
      toast({ description: 'Submitted Succesfully' });
    }
  };

  return (
    <section>
      <div className='w-full p-5 bg-background rounded-xl'>
        <h1 className='text-2xl font-bold text-center'>Add New Entry</h1>
        <div className='flex flex-col w-4/5 gap-3 mx-auto'>
          <label>
            <span className='my-2 font-semibold'>Car Name</span>
            <Input
              placeholder='Car Name'
              onChange={(e) => setName(e.target.value)}
              className='my-2'
              required
            />
          </label>
          <label>
            <span className='my-2 font-semibold'>Car Name</span>
            <Select onValueChange={setCategory}>
              <SelectTrigger className=''>
                <SelectValue placeholder='Select a Category' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {categories.map((value, index) => (
                    <SelectItem value={value} key={index}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>
          <label>
            <span className='my-2 font-semibold'>Car Description</span>
            <Textarea
              placeholder='Car Description'
              onChange={(e) => setDescription(e.target.value)}
              className='my-2'
              required
            />
          </label>
          <div className='flex flex-row justify-between w-full gap-2'>
            <label>
              <span className='my-2 font-semibold'>Gasoline(L)</span>
              <Input
                type='number'
                placeholder='Gasoline'
                onChange={(e) => setGasoline(+e.target.value)}
                className='my-2'
                required
              />
            </label>
            <label>
              <span className='my-2 font-semibold'>Capacity(P)</span>
              <Input
                type='number'
                max={8}
                placeholder='Capacity'
                onChange={(e) => setCapacity(+e.target.value)}
                className='my-2'
                required
              />
            </label>
            <label>
              <span className='my-2 font-semibold'>Steering Mode</span>
              <Select onValueChange={setSteering}>
                <SelectTrigger className=''>
                  <SelectValue placeholder='Steering Mode' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value='Manual'>Manual</SelectItem>
                    <SelectItem value='Auto'>Auto</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
          </div>
          <div className='flex flex-row w-full gap-2'>
            <label className='w-2/5'>
              <span className='my-2 font-semibold'>Current Rent($)</span>
              <Input
                type='number'
                placeholder='Current Rent'
                onChange={(e) => setRent(+e.target.value)}
                className='my-2'
                required
              />
            </label>
            <label className='w-2/5'>
              <span className='my-2 font-semibold'>Actual Rent($)</span>
              <Input
                type='number'
                placeholder='Actual Rent'
                onChange={(e) => setActualRent(+e.target.value)}
                className='my-2'
                required
              />
            </label>
          </div>
          <Button
            onClick={handleSubmit}
            className='w-full py-2 my-3 text-lg font-semibold rounded-xl'
          >
            Add Car
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddPage;
