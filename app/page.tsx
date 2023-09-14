'use client';
import CustomDropdown from '@/components/CustomSelectDropdown'
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

type Option = string;

  const Home: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Option[]>([]);

  const submitData = async () => {
    // Fetch API logic as mentioned before using selectedItems
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <p className='font-sf-pro-text font-bold'>Hiiiii</p>
      <p className='font-sf-pro-text font-medium'>Hiiiii</p>
      <p className='font-sf-pro-display font-medium'>Hiiiii</p>
      <p className='font-sf-pro-display font-bold blue-highlight'>Hiiiii</p>
      <p className='font-sf-pro-display font-bold text-title-1 text-blue-highlight'>Hiiiii</p>

      <p >Hiiiii</p>
    
      <CustomDropdown selected={selectedItems} setSelected={setSelectedItems} buttonp={true} options={['Apple', 'Banana', 'Cherry', 'Date', 'Fig']} />
   
    </div>
    </main>
  )
}
export default Home;