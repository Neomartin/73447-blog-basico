import Title from "../../components/Title/Title";
import { useOrder } from "../../context/OrderContext";
import Order from "../../pages/Order/Order";
import "./OrderModal.css";

export default function OrderModal() {

  const { isOpen, toggleCart } = useOrder();

  if(!isOpen) return;

  return (
    <div className="modal-overlay" onClick={ () => toggleCart() }>
      <div className="modal-content" onClick={ (e) => e.stopPropagation() }>
        <div className="modal-header">
          <Title titulo="Detalles de la orden" />
        </div>
        <div className="modal-body">
          <Order />
        </div>
        <div className="modal-footer">
          <button className="button button-danger" onClick={ () => toggleCart() }>
              Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
