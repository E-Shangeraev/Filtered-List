import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './component';
import { FilterContainer } from '../Filter';
import { CommentsContainer } from '../Comments';

export const LayoutContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <FilterContainer />
              <CommentsContainer />
            </>
          }
        />
      </Route>
    </Routes>
  );
};
