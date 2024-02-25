/* eslint-disable react/prop-types */
import "../styles/CardField.css";
import Card from "./Card";

export default function CardField({ cardData, changeCardClickedValue }) {
  return (
    <div className="cardField" key={"cardField"}>
      {cardData.map((card) => (
        <Card
          key={card.id}
          card={card}
          changeCardClickedValue={changeCardClickedValue}
        />
      ))}
    </div>
  );
}
