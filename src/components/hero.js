import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: bottom 25% center;
  height: 50vh;
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 600px) / 2) 2rem;
  width: 100%;
  margin-top: 0 ;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.3rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  } 
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    {
      image:file (relativePath: {eq: "babatunde-olajide-lagos.jpg"}) {
        sharp:childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid= {image.sharp.fluid} fadeIn="soft">
      <TextBox>
      <h1>Frontend Masters + Gatsby &hearts;</h1>
      <p>
        Hello Lagos <Link to="/about/">Learn about me &rarr;</Link>
      </p>
      </TextBox>
    </ImageBackground>
  )
};

export default Hero;