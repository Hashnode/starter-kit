import ShopCard from "@/components/Shop";
import LS from "@/lib/Payments/GetProducts";

import dynamic from "next/dynamic";
import Image from "next/image";

const LemonPay = dynamic(() => import("@/lib/Payments/LemonPay"), {
  ssr: false,
});

async function Shop() {
  const data = (await LS.getProducts()).data;

  return (
    <div className="text-black dark:text-white flex flex-col gap-4 mt-10 overflow-scroll no-scrollbar">
      {data.map((e) => {
        return <ShopCard e={e} key={e.id} />;
      })}
    </div>
  );
}

export default Shop;
