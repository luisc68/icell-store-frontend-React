import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import "./tarjeta.css";
import Tarjeta from "./Tarjeta";
import SeccionBusqueda from "./SeccionBusqueda";

const TablaProductoFiltrable = () => {
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStock, setFilterStock] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [resetFilters, setResetFilters] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [availableCategories, setAvailableCategories] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert("Producto agregado al carrito");
  };

  const handleResetFilters = () => {
    setFilterStock(false);
    setSelectedCategory("");
    setSearch("");
    setResetFilters(true);
  };

  useEffect(() => {
    fetch("http://localhost:8001/productos/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    let tempProducts = [...products];
    if (filterStock && search.length === 0) {
      tempProducts = tempProducts.filter((product) => product.stocked);
    }
    if (selectedCategory !== "") {
      tempProducts = tempProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
    if (search.length > 0) {
      const sanitizedSearch = search.replace(/^[^a-z0-9]+/i, "").toLowerCase();
      tempProducts = tempProducts.filter((product) =>
        product.nombre.toLowerCase().includes(sanitizedSearch)
      );
    }
    if (resetFilters) {
      setFilteredProducts(products);
      setResetFilters(false);
    } else {
      setFilteredProducts(tempProducts);
      setNoResults(tempProducts.length === 0);
    }
  }, [filterStock, search, selectedCategory, resetFilters, products]);

  useEffect(() => {
    const categoriesSet = new Set(products.map((product) => product.category));
    const categoriesArray = Array.from(categoriesSet);
    setAvailableCategories(categoriesArray);
  }, [products]);

  const handleFilterToggle = () => {
    setFilterStock((state) => !state);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <body>
        <h1 className="h1style">Bonitos y Caros</h1>
        <SeccionBusqueda
          searchValue={search}
          onSearch={setSearch}
          filterValue={filterStock}
          onFilter={handleFilterToggle}
          Category={selectedCategory}
          CategoryChange={handleCategoryChange}
          ResetFilters={handleResetFilters}
          availableCategories={availableCategories}
          noResults={filteredProducts.length === 0}
        />
        <Navbar carrito={carrito} setCarrito={setCarrito} />
        
          {noResults ? (
            <p>Productos no encontrados.</p>
          ) : (
            filteredProducts.map((products) => (
              <Tarjeta
                key={products.id}
                nombre={products.nombre}
                precio={products.precio}
                marca={products.marca}
                category={products.category}
                imagen={products.imagen}
                description={products.description}
                agregarAlCarrito={() => agregarAlCarrito(products)}
              />
            ))
          )}
      </body>
    </div>
  );
};

export default TablaProductoFiltrable;
