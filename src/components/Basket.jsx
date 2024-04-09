import Card from "./Card";

export default function Basket({ products, setBasket }) {
  return (
    <div className="basket">
      <h1>Basket</h1>
      {products.map((p) => (
        <Card key={p.id} product={p} data="basket" setBasket={setBasket} />
      ))}
    </div>
  );
}
