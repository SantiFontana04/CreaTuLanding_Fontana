import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart color="#1a73e8" size={25} />
      <span className="ms-2 badge rounded-pill" style={{ backgroundColor: '#1a73e8' }}>3</span>
    </div>
  );
}

export default CartWidget;