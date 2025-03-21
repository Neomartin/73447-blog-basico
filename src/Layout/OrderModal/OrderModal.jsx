import Title from "../../components/Title/Title";
import Order from "../../pages/Order/Order";
import "./OrderModal.css";

export default function OrderModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <Title titulo="Detalles de la orden" />
        </div>
        <div className="modal-body">
          <Order />
        </div>
        <div className="modal-footer">
          <button className="button button-danger">Cerrar</button>
        </div>
      </div>
    </div>
  );
}
