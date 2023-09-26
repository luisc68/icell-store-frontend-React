import React, { useRef } from "react";
import "./seccionbusqueda.css";
import Form from "react-bootstrap/Form";

const SeccionBusqueda = ({
  searchValue,
  onSearch,
  filterValue,
  onFilter,
  selecCategory,
  CategoryChange,
  ResetFilters,
  noResults,
  availableCategories,
}) => {
  const categoryRef = useRef(null);

  const handleResetFilters = () => {
    ResetFilters();
    CategoryChange({ target: { value: "" } }); // Establecer categoría seleccionada como "All"
    categoryRef.current.value = ""; // Resetear valor del Form.Select a "All"
  };

  return (
    <div className="search-style">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        id="filtrarStock"
        checked={filterValue}
        onChange={onFilter}
      />
      <label htmlFor="filtrarStock">En stock</label>
      <div className="div-select">
        <Form.Select
          size="sm"
          value={selecCategory}
          onChange={CategoryChange}
          ref={categoryRef}
        >
          <option value="">All</option>
          {availableCategories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Form.Select>
        <button onClick={handleResetFilters} className="checkoutf">
          Limpiar Filtro
        </button>
      </div>
      {noResults && <p>Productos no encontrados.</p>}
    </div>
  );
};

export default SeccionBusqueda;
