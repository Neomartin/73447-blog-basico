import Title from "../../components/Title/Title";
import { useOrder } from "../../context/OrderContext";
import "./Order.css";

export default function Order() {

  const { cart, total } = useOrder()

  return (
    <>
      <Title
        titulo="Carrito de compras de Posteos"
        subtitle="Aquí podrás ver los posteos que has comprado"
      />

      <div className="order-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map(product => (
                <tr key={product.id}>

                  <td>{ product.id }</td>
                  <td>{ product.title }</td>
                  <td>{ product.price }</td>
                  <td>{ product.quantity }</td>
                  <td>{ product.quantity * product.price }</td>
                  
                </tr>
              ))
            }

          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>TOTAL $ {total}</td>
            </tr>
          </tfoot>
        </table>

        <div className="order-buttons">
          <button className="button">Finalizar compra</button>
          <button className="button">Vaciar carrito</button>
        </div>
      </div>
    </>
  );
}
