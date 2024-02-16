const productos = [
  {
    id: "1",
    nombre: "Gorra con palmera",
    precio: 12000,
    img: "../img/gorra-1.jpg",
    categoria: "1",
    stock: 50,
  },
  {
    id: "2",
    nombre: "Gorra con textura",
    precio: 15000,
    img: "../img/gorra-2.jpg",
    categoria: "1",
    stock: 50,
  },
  {
    id: "3",
    nombre: "Gorra rosada",
    precio: 15000,
    img: "../img/gorra-3.jpg",
    categoria: "1",
    stock: 100,
  },
  {
    id: "4",
    nombre: "Polerón fucsia",
    precio: 25000,
    img: "../img/poleron-1.jpg",
    categoria: "2",
    stock: 50,
  },
  {
    id: "5",
    nombre: "Poleron de rayas rosa",
    precio: 28000,
    img: "../img/poleron-2.jpg",
    categoria: "2",
    stock: 50,
  },
  {
    id: "6",
    nombre: "Poleron de rayas azules",
    precio: 25000,
    img: "../img/poleron-2.jpg",
    categoria: "2",
    stock: 50,
  },
  {
    id: "7",
    nombre: "Reloj soki cafe",
    precio: 8000,
    img: "../img/reloj-1.jpg",
    categoria: "3",
    stock: 10,
  },
  {
    id: "8",
    nombre: "Reloj soki blanco",
    precio: 8000,
    img: "../img/reloj-2.jpg",
    categoria: "3",
    stock: 10,
  },
  {
    id: "9",
    nombre: "Reloj soki negro",
    precio: 8000,
    img: "../img/reloj-3.jpg",
    categoria: "3",
    stock: 10,
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 20);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 20);
  });
};

export const getProductosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.categoria === categoria
      );
      resolve(productosCategoria);
    }, 10);
  });
};
