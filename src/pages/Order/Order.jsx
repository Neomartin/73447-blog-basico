import Title from "../../components/Title/Title";
import "./Order.css";

export default function Order() {
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
            <tr>
              <td>3</td>
              <td>Un post muy interesante</td>
              <td>1000</td>
              <td>2</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Otro post</td>
              <td>3000</td>
              <td>4</td>
              <td>12000</td>
            </tr>

            {/* #Repetir el tr por cada producto */}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>TOTAL $</td>
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
