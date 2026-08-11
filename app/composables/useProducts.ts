export const useProducts = () => {
  const products = useState('products', () => [])

  return {
    products,
  }
}
