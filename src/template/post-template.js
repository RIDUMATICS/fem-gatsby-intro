import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { graphql } from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';

export const post = graphql`
  query( $slug: String! ){
    mdx(frontmatter: { slug: { eq: $slug }}) {
      frontmatter {
        author
        title
      }
        body
    }
  }
  `

const PostTemplate = ({ data: {mdx: { frontmatter: { author, title }, body} }}) => { 
  return (
  
  <Layout>
    <h1> {title}</h1>
    <p css=
    {css`

      font-size: 0.75rem;

    `}> Posted By {author}</p>
    <MDXRenderer>{body}</MDXRenderer>
    <ReadLink to='/'> &larr; back to all posts </ReadLink>
  </Layout>
)}

export default PostTemplate;