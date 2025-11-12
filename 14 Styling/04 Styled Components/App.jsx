import styled from "styled-components";

const LargeHeading = styled.h1``;

const LargeGreenHeading = styled.h1`
  color: green;
`;

const SmallRedHeading = styled.h2(() => `
color: red;
border:2px solid red;
padding:4px;
`
);

const SmallGreenHeading = styled.h2({
  color: "green",
  border: "2px solid red",
  padding: "4px",
});

const StyledButton = styled.button `
border : 5px solid black;
border-radius:10px;
`;

function App() {
  return (
    <div>
      <h1>Understanding Styled Components</h1>
      <hr />
      <h1>Basic H1</h1>
      <h2>Basic H2</h2>
      <hr />
      <LargeHeading>Styled Basic H1</LargeHeading>
      <LargeGreenHeading>Styled Colored H1</LargeGreenHeading>
      <SmallRedHeading>Styled Colored H2</SmallRedHeading>
      <SmallGreenHeading>Styled Colored H2</SmallGreenHeading>
      <StyledButton>Submit</StyledButton>
      <StyledButton>Submit</StyledButton>
    </div>
  );
}
export default App;