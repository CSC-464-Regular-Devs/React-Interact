/*
<CodeBackground>
  <div style={{height: "500px"}}>
    <h2>30</h2>
    <h2>60</h2>
  </div>
</CodeBackground>
*/

import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = props => (
    <StaticQuery
        query={graphql`
      query {
        desktop: file(relativePath: { eq: "code.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid;
            return (
                <BackgroundImage
                    Tag="section"
                    fluid={imageData}
                    backgroundColor={'#040e18'}
                >
                    {props.children}
                </BackgroundImage>
            );
        }}
    />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
