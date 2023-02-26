import { useReducer, useEffect, ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";
import { Navbar } from "../Navbar/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  const favouriiteGoods = {
    goodsIDs:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("goodsIDs") as string) || []
        : [],
  };

  // const reducer = (state: number[], action: { type: string; id: number }) => {
  //   switch (action.type) {
  //     case '':

  //     default:
  //       return state;
  //   }
  // };

  // const [goods, dispatch] = useReducer(reducer, favouriiteGoods);

  // const addToFavouriteGoods = (goodId: number) => {
  //   dispatch({ type: "added", id: goodId });
  // };

  return (
    <>
      <Hero />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
