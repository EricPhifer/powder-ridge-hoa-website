import React from 'react';
import { graphql } from 'gatsby';
import Search from '../components/Search';
import { PageCardStyles } from '../styles/PageCardStyles';
import MinutesItemGrid from '../components/MinutesItemGrid';

export default function Minutes() {
  return (
    <>
      <h1>Board Minutes</h1>
      <Search />
      <PageCardStyles>
        <MinutesItemGrid />
      </PageCardStyles>
    </>
  );
}

export const query = graphql`
  query MinuteSearchQuery {
    search: allSanityMinutes {
      nodes {
        tags
        meetingStart
      }
    }
  }
`;
