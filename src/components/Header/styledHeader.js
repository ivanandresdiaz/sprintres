import styled from 'styled-components';

export const DivContainerHeader = styled.div`
display: flex;
justify-content:space-around;
width:100%;
height:60px;
color: blue;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

`;
export const HeaderNav = styled.header`
display: flex;
justify-content:space-around;
align-items:center;
width: 100%;
height: 60px;
position: fixed;
top: 0;
left: 0;
z-index: 1000;
background-color:#FFFFFF;

a{ 
  color:#A78BFA;
  text-decoration:none;
  font-size:2.5rem
}
a:hover{
  color:black;
}
`;
export const DivItemNav = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  height: 70px;
 p{ 
  color:#A78BFA;
  text-decoration:none;
  font-size:2.5rem
}
p:hover{
  color:black;
}
`;
