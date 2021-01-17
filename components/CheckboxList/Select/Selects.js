import React, { useState } from 'react';
import { Select } from 'antd';

const OPTIONS = [
    'programming', 'startups',
    'decentralization', 'python',
    'blockchain',  'technology',
    'cryptocurrency', 'entrepreneurship',
    'business', 'bitcoin',
    'react', 'marketing', 
    'ux', 'devops', 
    'web-development','venture-capital', 
    'social-media', 'design', 
    'coding', 'security', 
    'artificial-intelligence', 'amazon'
];

const Selects = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = selectedItems => {
    console.log(selectedItems);
    setSelectedItems(selectedItems);
  };
  
  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
  return (
      <Select
        mode="multiple"
        placeholder="Select categories"
        value={selectedItems}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
  )
}

export default Selects;