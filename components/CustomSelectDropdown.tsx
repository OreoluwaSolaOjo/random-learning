'use client';
import React, { useState, useRef, useEffect } from 'react';

type Option = string;

interface CustomDropdownProps {
    options: Option[];
    buttonp: boolean;
    selected: Option[];
    setSelected: React.Dispatch<React.SetStateAction<Option[]>>;
}


const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, buttonp, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [customValue, setCustomValue] = useState<string>('');

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const filteredOptions: Option[] = options.filter(option =>
        option.toLowerCase().includes(search.toLowerCase())
    );


    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative">
            <div className='border-2 text-center border-primary-dark-100 px-10 w-64'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {selected.length ? selected.join(', ') : 'Select an option'}

                </button>
            </div>


            {isOpen && (
                <div ref={dropdownRef} className="absolute mt-2 w-64 rounded-md shadow-lg bg-white">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full px-4 py-2"
                    />

                    <ul>
                        {filteredOptions.map(option => (
                            <li
                                key={option}
                                onClick={() => {
                                    const updatedSelection = selected.includes(option)
                                        ? selected.filter(item => item !== option)  // Remove if already selected
                                        : [...selected, option];                    // Add to selection otherwise

                                    setSelected(updatedSelection);
                                    setIsOpen(false);
                                }}

                                className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>

                    <input
                        type="text"
                        placeholder="Enter custom value..."
                        value={customValue}
                        onChange={e => setCustomValue(e.target.value)}
                        className="w-full px-4 py-2 border-t"
                    />
                    {buttonp === true &&
                        <button
                            onClick={() => {
                                if (customValue && !selected.includes(customValue)) { // Ensure customValue is not empty and not already selected
                                    setSelected(prevSelected => [...prevSelected, customValue]); // Add the customValue to the end of the selected array
                                    setIsOpen(false);
                                }
                            }}
                            className="w-full text-center py-2 hover:bg-gray-200"
                        >
                            Add Custom Value
                        </button>
                    }
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
