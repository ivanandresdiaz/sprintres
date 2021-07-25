import styled, { keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
from {
  filter: grayscale(100%) blur(5px) brightness(10%);
  opacity: 0;
}
to {
  filter:blur(0) grayscale(0) brightness(30%);
  opacity: 1;
}
`;
export const DivContainerImg = styled.div`
max-width:260px;
max-height:260px;
overflow: hidden;
border-radius:25px;

`;
export const ImgCard = styled.img`
animation: 1s ${fadeInKeyframes} ease;
width:100%;
cursor: pointer;
height:260px;
object-fit: cover;
object-position: center;
border-radius:25px;
filter: brightness(30%);
&:hover{
  filter: brightness(110%);
  transition:all 500ms ease;
  transform: scale(1.1);
}

`;
export const DivCard = styled.div`
width: 260px;
position: relative;
&:hover{
  .name_character{
  display: inline;
  color: #FFCA28;
  font-size: 2vw;
  transition: all 500ms ease;
}
}
`;

export const DivCardDetails = styled.div`
position:absolute;
top: 75%;
z-index: 5;
width:100%;
display: flex;
justify-content:center;
align-items:center;
`;
export const NameCharacter = styled.h3`
 display: inline;
  color: #FFCA28;
`;

export const DivAddFavorite = styled.div`
position:absolute;
top: 20px;
right: 20px;
min-height:35px;
min-width:35px;
border-radius:50%;
border: 1px solid white;
display: flex;
justify-content:center;
align-items:center;
background-color: white;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
