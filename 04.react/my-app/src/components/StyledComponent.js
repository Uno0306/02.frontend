import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const GoldButton = styled(Button)`
  color: gold;
  border-color: gold;
`;

// const Link = ({ className, childred }) => (
//   <a className={className}>{childred}</a>
// );

// const StyleLink = styled(Link)`
//   color: red;
//   font-weight: bold;
// `;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const AttributeInput = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1rem"
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${props => props.size},
  padding: ${props => props.size}
`;

const StyledComponent = () => {
  return (
    <>
      <Wrapper>
        <Title>Hello Styled</Title>
      </Wrapper>
      <Button>Noraml</Button>
      <Button primary>Primary</Button>
      <GoldButton>GoldButton</GoldButton>
      <GoldButton as="a" href="">
        Link : GoldButton
      </GoldButton>

      <div>
        {/* <Link>Unstyled</Link>
        <br />
        <StyleLink>Styled</StyleLink> */}
        <Input type="text" defaultValue="@probablyup" />
        <Input type="text" defaultValue="@geelen" inputColor="green" />
        <br />
        <AttributeInput placeholder="A small text input" />
        <br />
        <AttributeInput placeholder="A bigger text input" size="2em" />
      </div>
    </>
  );
};

export default StyledComponent;
