import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { SearchButtons } from './components/SearchButtons';
import { SearchField } from './components/SearchField';
import { Wrapper } from 'components/Wrapper';
import { Group } from 'components/Group';

export type FilterProps = {
  handleNameChange: (arg: string) => void;
  handleDomainZoneClick: (arg: string[]) => void;
  defaultName: string;
  defaultZone: string[];
};

export const Filter = ({
  handleNameChange,
  handleDomainZoneClick,
  defaultZone,
  defaultName,
}: FilterProps) => {
  const [activeZone, setActiveZone] = useState(defaultZone);
  const [activeName, setActiveName] = useState(defaultName);

  useEffect(() => {
    handleSearchByName(activeName);
  }, [activeName]);

  useEffect(() => {
    handleDomainZoneClick(activeZone);
  }, [activeZone]);

  const handleSearchByName = (name: string) => {
    setActiveName(name);
  };

  const handleSearchByZone = (zone: string) => {
    setActiveZone((prev: string[]) => {
      if (!prev.includes(zone)) {
        return [...prev, zone];
      } else {
        return prev.filter((item) => item !== zone);
      }
    });
  };

  return (
    <S.Filter>
      <Wrapper>
        <Group display="flex" flexWrap="wrap" gridGap={65}>
          <SearchField onChange={handleNameChange} value={defaultName} />
          <SearchButtons onClick={handleSearchByZone} zone={activeZone} />
        </Group>
      </Wrapper>
    </S.Filter>
  );
};
