import React from 'react';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
import { Group } from 'components/Group';
import * as S from './styled';

const buttons = ['.org', '.com', '.biz'];

export type SearchButtonsProps = {
  onClick: (arg: string) => void;
  zone: string[];
};

export const SearchButtons = ({ onClick, zone }: SearchButtonsProps) => {
  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    const value = e.currentTarget.textContent;
    value && onClick(value);
  };

  return (
    <S.SearchButtons>
      <Label>Show only</Label>
      <Group display="flex" gridColumnGap="2">
        {buttons.map((btnText) => (
          <Button
            key={btnText}
            onClick={handleButtonClick}
            active={zone.includes(btnText)}
          >
            {btnText}
          </Button>
        ))}
      </Group>
    </S.SearchButtons>
  );
};
