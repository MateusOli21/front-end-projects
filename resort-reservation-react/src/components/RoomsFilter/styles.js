import styled from "styled-components";

export const Container = styled.div``;

export const FilterForm = styled.form`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
`;

export const FormSelect = styled.select`
  width: 100%;
  background: transparent;
  padding: 0.5rem 0.25rem;
  text-transform: capitalize;
  font-size: 0.85rem;
  font-family: "Josefin Sans", sans-serif;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 1.1rem;
`;

export const OptionSpan = styled.span`
  font-size: 0.9rem;
`;

export const Option = styled.div`
  input[type="number"] {
    width: 60%;
    margin: 0 8px;
  }
`;

export const RangeInput = styled.input`
  width: 100%;
`;

export const SizeInputs = styled.div`
  display: flex;
`;

export const ExtraInputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  input {
    margin-right: 8px;
    transform: scale(1.25);
  }
`;
