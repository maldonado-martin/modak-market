import { Fragment } from "react";

import { useGetAllProducts } from "@/api/queries";
import Error from "@/components/error";
import Loading from "@/components/loading";
import ProductList from "@/components/product-list";

export default function Home() {
  const query = useGetAllProducts();

  if (query.isPending) return <Loading />;

  if (query.isError) return <Error retry={query.refetch} />;

  return (
    <Fragment>
      <ProductList data={query.data.products} />
    </Fragment>
  );
}
