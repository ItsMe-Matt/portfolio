import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Video = ({ embedId }) => (
  <Container>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Container>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired
};

const Container = styled.div`
height: 75vh;
width: 70vw;
`


export default Video;