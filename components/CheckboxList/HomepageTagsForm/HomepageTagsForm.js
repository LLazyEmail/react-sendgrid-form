import React, { useState } from 'react';
import { Select, Input } from 'antd';

const { TextArea } = Input;

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

const HomepageTagsForm = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = selectedItems => {
    console.log(selectedItems);
    setSelectedItems(selectedItems);
  };
  
  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
  return (
      <>
        <Select
            mode="multiple"
            placeholder="Select categories"
            value={selectedItems}
            onChange={handleChange}
            style={{ width: '100%', margin: '0 0 20px 0' }}
        >
            {filteredOptions.map(item => (
                <Select.Option key={item} value={item}>
                    {item}
                </Select.Option>
            ))}
        </Select>
        <TextArea rows={5} style={{marginBottom: '20px'}} />
      </>
  )
}

export default HomepageTagsForm;