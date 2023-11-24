import React from 'react'
import './home.css'
import { Buscador } from '../../components/buscador/buscador'
import { NamePage } from '../../components/namePage/namePage'
import { Options } from '../../components/options/options'
import { ButtonLupa } from "../../components/buttonLupa/buttonLupa";
import { Categori } from "../../components/categori/categori";
import { Product } from "../../components/product/product";
import svgPaths from "../../components/categori/svgPaths";
import { products } from "../../components/product/productData";

export const Home = () => {
  return (
    <div className="p3">
      <div className="inicio">
        <NamePage nombrePagina="Productos" />
        <div className="busqueda">
          <Buscador letras="Buscar Productos" />
          <ButtonLupa />
        </div>
      </div>
      <div className="categorias">
        {svgPaths.map((item, index) => (
          <Categori key={index} svg={item.path} name={item.nombre} />
        ))}
      </div>
      <div className="DisProducts">
        {products.map((product) => (
          <Product key={product.nombre} {...product} />
        ))}
      </div>
      <Options />
    </div>
  )
}
