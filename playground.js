<div className="grid-container">
      <figure className="grid_item grid_item-1">
        <div className="text" style={{ textAlign: "center" }}>
          {props.name}
        </div>
        <Link
          to={{
            pathname: `/details/${props._id}`,
            state: props,
          }}
          key={props.day}
        >
          <img
            className="grid_image"
            src={props.url}
            alt=""
          />
          </Link>
          <button className="online_view">View Site</button>
      </figure>
    </div>