import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { AppRoutes } from '../../const';

type ProductCardProps = {
  product: Product;
  isBig?: boolean;
}

function ProductCard({product, isBig = false}: ProductCardProps) {
  return (
    <div className={`card-item ${isBig ? 'card-item--big' : ''}`}>
      <Link className="card-item__img-link" to={AppRoutes.Catalog}>
        <div className="card-item__img-wrapper">
          <picture>
            <source
              type="image/webp"
              srcSet={product.previewImageWebp}
            />
            <img
              src={product.previewImage}
              srcSet={product.previewImage}
              width={241}
              height={245}
              alt={product.title}
            />
          </picture>
        </div>
        {product.isNew && <span className="card-item__label">Новинка</span>}
      </Link>
      <button className={`card-item__favorites ${product.isFavorite ? 'card-item__favorites--active' : ''}`}>
        <span className="visually-hidden">Добавить в избранное</span>
        <svg width={51} height={41} aria-hidden="true">
          <use xlinkHref="#icon-like" />
        </svg>
      </button>
      {isBig && <span className='card-item__price'>{product.price}</span>}
      <Link className="card-item__link" to={AppRoutes.Catalog}>
        <h3 className="card-item__title">
          <span>{product.title}</span>
        </h3>
      </Link>
    </div>
  );
}

export default ProductCard;
