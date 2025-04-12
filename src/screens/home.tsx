import { Fragment } from "react";

import ProductList from "@/components/product-list";
import Search from "@/components/search";

export default function Home() {
  return (
    <Fragment>
      <Search />
      <ProductList />
    </Fragment>
  );
}
