import React from 'react';
import { useQuery } from 'hooks/useQuery';
import { toString, toUniqueArray } from 'helpers/convert';
import { Group } from 'components/Group';
import { Wrapper } from 'components/Wrapper';
import { Comment as CommentType } from 'app/types/comments';
import { Comment } from './components/Comment';
import * as S from './styled';

export type CommentsProps = {
  loading: boolean;
  items: CommentType[];
};

export type FilterType = <T extends CommentType>(arg: T) => boolean | T;

export const Comments = ({ loading, items }: CommentsProps) => {
  const queries = useQuery();
  const queryName = toString(queries.get('name')).toLowerCase();
  const queryZone = toUniqueArray(queries.get('zone'));

  const filterByName: FilterType = (item) => {
    return queryName.length > 0 ? item.name.includes(queryName) : item;
  };
  const filterByZone: FilterType = (item) => {
    return queryZone.length > 0
      ? queryZone.includes('.' + item.email.split('.')[1])
      : item;
  };

  return (
    <S.Comments>
      <Wrapper>
        {!loading && (
          <Group display="grid" gridAutoFlow="row" gridRowGap={24}>
            {items
              .filter(filterByName)
              .filter(filterByZone)
              .map((item) => (
                <Comment key={item.id} {...item} />
              ))}
          </Group>
        )}
      </Wrapper>
    </S.Comments>
  );
};
