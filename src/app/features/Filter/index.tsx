import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'hooks/useQuery';
import { toString, toUniqueArray } from 'helpers/convert';
import { Filter } from './component';

export const FilterContainer = () => {
  const queries = useQuery();
  const navigate = useNavigate();

  const handleNameChange = (name: string) => {
    name.length > 0 ? queries.set('name', name) : queries.delete('name');
    navigate({ search: queries.toString() });
  };

  const handleDomainZoneClick = (zone: string[]) => {
    zone.length > 0
      ? queries.set('zone', zone.join(','))
      : queries.delete('zone');
    navigate({ search: queries.toString() });
  };

  return (
    <Filter
      handleNameChange={handleNameChange}
      handleDomainZoneClick={handleDomainZoneClick}
      defaultName={toString(queries.get('name'))}
      defaultZone={toUniqueArray(queries.get('zone'))}
    />
  );
};
