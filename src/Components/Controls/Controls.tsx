import "./Controls.css";
import React, { useEffect, useState } from "react";
import Search from "./Search/Search";
import { CustomSelect } from "./CustomSelect/CustomSelect";
import { ActionMeta } from "react-select"; // Импортируем ActionMeta для типизации onChange

// Опции для выбора региона
const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

// Интерфейс для свойств компонента Controls
interface Props {
  handleSearch: (search: string, region: string) => void;
}

// Интерфейс для опций, которые принимает CustomSelect
interface Option {
  value: string;
  label: string;
}

const Controls = ({ handleSearch }: Props) => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  // Обработчик для ввода текста поиска
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Обработчик изменения выбранного региона
  const handleRegionChange = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => {
    const selectedOption = newValue as Option | null;
    setRegion(selectedOption?.value || "");
  };

  // Выводим в консоль значение региона при изменении
  useEffect(() => {
    handleSearch(search, region);
  }, [search, region]);

  return (
    <div className="controls__wrapper">
      {/* Компонент поиска */}
      <Search search={search} handleChangeInput={handleChangeInput} />

      {/* Компонент выбора региона */}
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={options.find((option) => option.value === region) || null}
        onChange={handleRegionChange}
      />
    </div>
  );
};

export default Controls;
