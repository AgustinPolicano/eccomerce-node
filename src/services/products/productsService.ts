import productsData from './products.json';
import { productsEntry } from '../../models/products.model';

const products: Array<productsEntry> = productsData

export const getAllProducts = () => products

export const getProductById = (id: number): productsEntry | undefined => {
    const entry = products.find(p => p.id === id)
    return entry
}