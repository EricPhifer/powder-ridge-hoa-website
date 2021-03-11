import React from 'react';
import { graphql } from 'gatsby';
import Search from '../components/Search';

export default function Minutes() {
  return (
    <>
      <h2>Board Minutes</h2>
      <Search />
    </>
  );
}

export const query = graphql`
  query MinuteSearchQuery {
    minutes: allSanityMinutes {
      nodes {
        tags
        meetingStart
      }
    }
  }
`;
