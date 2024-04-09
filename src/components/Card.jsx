export default function Card({ product, setBasket, data }) {
  const handleClick = () => {
    if (data === "cards") {
      setBasket((prev) => [...prev, product]);
    } else {
      setBasket((prev) => prev.filter((p) => p.id !== product.id));
    }
  };
  return (
    <div id={product.id} className="card">
      
      <img src={product.img} alt="" />
      <h3>{product.title}</h3>
      <h3>{product.text}</h3>
      <p>{product.price}</p>
      <button onClick={() => handleClick()}>
        {data == "cards" ? "add to basket" : "delete"}
      </button>
    </div>
  );
}
