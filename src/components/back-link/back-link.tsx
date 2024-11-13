function BackLink() {
  return (
    <div className="back-link">
      <div className="container">
        <a className="back-link__link" href="#">
          Назад
          <svg
            className="back-link__icon"
            width={30}
            height={16}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-arrow-left" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BackLink;
