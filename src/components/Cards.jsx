import { useEffect, useState } from "react";
import "../App.css";
import Card from "./Card";
export default function Cards({ products, setBasket }) {
  const [cards, setCards] = useState(products);
  const [value, setValue] = useState("")
  const [sort, setSort] = useState("default");

  useEffect(()=>{
    if(sort === "a-z"){
      setCards(cards.sort((a,b)=> a + b));
    }else if(sort === "z-a"){
      setCards(cards.sort((a, b)=> b + a));
    }
    
  },[sort])

  useEffect(()=>{
    setCards(products.filter((p)=>p.text.toLowerCase().includes(value.toLocaleLowerCase())));
  }, [value]);
  return (
    <div className="cards">
      <div className="search">
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />

      <select value={sort} onChange={(e)=> setSort(e.target.value)}>
        <option value="default">по умолочонию</option>
        <option value="a-z"> по возрастанию</option>
        <option value="z-a">по убиванию</option>
      </select>
      </div>

      {cards.map((p) => (
        <Card product={p} setBasket={setBasket} data="cards" />
      ))}
    </div>
  );
}
