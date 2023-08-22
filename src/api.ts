export const getProducts = async (
  search: string | undefined,
  page: number | undefined
) => {
  console.log(page);

  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${search}&limit=12&skip=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
