import { useState } from "react";
import { getProducts } from "../../api";
import Card from "../Card";
import Layout from "../Layout";
import { useQuery } from "react-query";

type Props = {};

const Products = (props: Props) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["products", { search, page }],
    queryFn: () => getProducts(search, page),
  });

  return (
    <Layout>
      <div className=" flex justify-center">
        <input
          onChange={(e) => {
            searchHandler(e);
          }}
          value={search}
          className=" p-3 w-1/2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="search..."
        />
      </div>
      <div>
        {isLoading ? <p> Loading...</p> : <Card products={data.products} />}
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          onClick={() => {
            page <= 0
              ? setPage(0)
              : setPage(() => {
                  return page - 12;
                });
          }}
          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setPage(() => {
              return page + 12;
            })
          }
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          Next
        </button>
      </div>
    </Layout>
  );
};

export default Products;
