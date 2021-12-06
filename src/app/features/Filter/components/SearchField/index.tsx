import React, { useState, useEffect } from 'react';
import { Input } from 'components/Input';
import { Label } from 'components/Label';
import * as S from './styled';

export type SearchFieldProps = {
  onChange: (arg: string) => void;
  value: string;
};

export const SearchField: React.FC<SearchFieldProps> = ({
  onChange,
  value,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <S.SearchField>
      <Label htmlFor="input">Search</Label>
      <Input
        autoComplete="off"
        onChange={handleNameChange}
        value={inputValue}
        placeholder="Enter Name"
        type="text"
        id="input"
      />
    </S.SearchField>
  );
};
