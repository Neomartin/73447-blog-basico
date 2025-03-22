import { createContext, use, useContext, useEffect, useState } from "react";

const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)


function OrderProvider({ children }) {


    const [ isOpen, setIsOpen] = useState(false) // Me va a servir para mostrar o no un modal o el sidebar

    const [ count, setCount ] = useState(0) // Me va a servir para mostrar la cantidad de productos en el carrito
    const [ total, setTotal ]   = useState(0) // Me va a servir para mostrar el total de la compra

    const [ cart, setCart ] = useState([])

    useEffect(() => {

        // Cada vez que el carrito cambia, actualizo el contador
        let contador = 0;
        let total = 0;

        cart.forEach((item) => {
            contador += item.quantity;
            total += item.quantity * item.price
        })

        setCount(contador);
        setTotal(total)

    }, [cart])



    function toggleCart() {
        console.log("toggleCart clicked")
        setIsOpen(!isOpen)
    }

    function addPost(post) {
        // Tengo que checkear si el post ya fue agregado a la carta
        // Si ya fue agregado, no lo agrego de nuevo solo incremento su cantidad
        // Si no fue agregado, lo agrego al carrito
        // Entonces busco si hay algun post en la cart con un find que tenga el mismo id dle post que quiero agregar
        const postInCart = cart.find((item) => item.id === post.id)



        if(!postInCart) {
            post.quantity = 1 // Si no existe, le asigno la cantidad 1
            post.price = parseInt(Math.random() * 50000) // En el ecommerce esto no es necesario

            setCart([ ...cart, post ])
            
        } else {
            postInCart.quantity += 1 // Si existe, le incremento la cantidad

            setCart([ ...cart ]) // Actualizo el carrito, no es necesario pero es una buena practica
        }
        

    }

    function removePost(post) {
        // Podria generar un nuevo filtrando el post a partir de su id y ese array setearlo como nuevo valor del carrito

        // Otra forma, seria generar una shallow copy del array, buscar el indice de mi post y eliminarlo con splice
    }

    function decreasePostQuantity(id) {
        // Busco el post con find a partir de su id, y le decremento la cantidad en 1, dado el caso que el post tuviese solo 1 unidad, lo elimino del carrito
    }

    return (
        <OrderContext.Provider 
            value={{ 
                    cart, // array de productos
                    toggleCart, // funcion para abrir y cerrar el carrito
                    isOpen, //estado del carrito
                    addPost,
                    count,
                    total
                 }}
        >
                {children}
        </OrderContext.Provider>
    )

}

export default OrderProvider
