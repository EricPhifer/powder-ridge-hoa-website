import React from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import { graphql, useStaticQuery } from 'gatsby';

export const SearchStyles = styled.div`
  text-align: center;
  div {
    display: grid;
    margin: 12px;
    grid-template-areas:
      '. . . search search search search search search . . .'
      '. . . . searchbtn searchbtn searchbtn searchbtn . . . .';
  }
  input {
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 2rem;
    grid-area: search;
  }
  button {
    margin-top: 1rem;
    grid-area: searchbtn;
  }
  button:hover {
    box-shadow: 5px 5px 10px black;
  }
`;

export default function Search() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      faqs: allSanityFaq {
        nodes {
          question
          answer
          id
        }
      }
      ccrs: allSanityCcrs {
        nodes {
          refId
          ccrContent
          id
        }
      }
      minutes: allSanityMinutes {
        nodes {
          meetingStart
          tags
          id
        }
      }
    }
  `);

  return (
    <SearchStyles>
      <div>
        <input
          ref={searchRef} // where does this lead?
          type="search"
          placeholder="Search by Keywords"
          defaultValue={defaultSearchQuery} // where?
          onChange={updateSearchQuery} // where?
          name="search"
        />
        <button type="button" onClick={() => fuse.search(combined)}>
          Search
        </button>
      </div>
    </SearchStyles>
  );
}
