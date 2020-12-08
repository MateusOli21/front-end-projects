import React, { useContext } from "react";

import { RoomContext } from "../../Context/RoomContext";

import {
  Container,
  FilterForm,
  Option,
  FormSelect,
  Label,
  OptionSpan,
  SizeInputs,
  ExtraInputs,
  RangeInput,
} from "./styles";

function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    handleChange,
  } = context;

  function getUniqueValues(items, value) {
    return [...new Set(items.map((item) => item[value]))];
  }

  let types = getUniqueValues(rooms, "type");
  types = ["all", ...types];

  const peopleCapacity = getUniqueValues(rooms, "capacity");

  return (
    <Container>
      <FilterForm>
        <Option>
          <Label htmlFor="type">Tipo de quarto</Label>
          <FormSelect
            id="type"
            name="type"
            value={type}
            onChange={handleChange}
          >
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </FormSelect>
        </Option>

        <Option>
          <Label htmlFor="capacity">Quantidade de pessoas</Label>
          <FormSelect
            id="capacity"
            name="capacity"
            value={capacity}
            onChange={handleChange}
          >
            {peopleCapacity.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </FormSelect>
        </Option>

        <Option>
          <Label htmlFor="price">Valor R${price}</Label>
          <RangeInput
            type="range"
            id="price"
            name="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
          />
        </Option>

        <Option>
          <Label htmlFor="size">Tamanho do quarto</Label>
          <SizeInputs>
            <OptionSpan>Min: </OptionSpan>
            <input
              type="number"
              id="size"
              name="minSize"
              value={minSize}
              onChange={handleChange}
            />

            <OptionSpan>Max: </OptionSpan>
            <input
              type="number"
              id="size"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
            />
          </SizeInputs>
        </Option>

        <Option>
          <Label htmlFor="price">Extras</Label>

          <ExtraInputs>
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <OptionSpan>Cáfe da manha incluso</OptionSpan>
          </ExtraInputs>

          <ExtraInputs>
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <OptionSpan>Permitidos animais</OptionSpan>
          </ExtraInputs>
        </Option>
      </FilterForm>
    </Container>
  );
}

export default RoomsFilter;
