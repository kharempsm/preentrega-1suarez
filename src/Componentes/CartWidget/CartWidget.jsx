import "./CartWidget.css";

const CardWidget = () => {
  return (
    <div>
      <img
        className="imgBolsita"
        src="./img/bolsita.png"
        alt="imagen de bolsita"
      />
      <strong className="contador">5</strong>
    </div>
  );
};

export default CardWidget;
