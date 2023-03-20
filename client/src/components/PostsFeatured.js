import { Link } from "react-router-dom";

export const PostsFeatured = (props) => {

  const {
    _id,
    image,
    price,
    date,
    title,
    viewCount,
    location,
    description,
    category,
    phoneNumber,
  } = props;

  const postImage = {
    width: "100%",
    backgroundPosition: "center center",
    backgroundRepaet: "no-repeat",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundSize: "cover",
    height: "100%",
    backgroundImage: "url(" + image + ")",
  };

  return (
    <div className="post post--featured">
      <Link to={`/post/${_id}`}>
        <div className="post__head">
          <div style={postImage}>
            <div className="post__overlay">
              <p className="post__category">{category}</p>

              <p className="post__price">${price}</p>
            </div>
          </div>
        </div>

        <div className="post__body">
          <h4 className="post__title">
            {title && title.length > 20 ? title.slice(0, 20) + "..." : title}
          </h4>

          <div className="post__content">
            <div className="post__meta">
              <div className="post__meta-inner">
                <p className="post__meta-views">
                  <i className="icon material-icons">visibility</i>
                  {viewCount || ""} Views
                </p>

                <p className="post__meta-location">
                  <i className="icon material-icons">location_on</i>

                  {location && location.length > 10
                    ? location.slice(0, 10) + " ..."
                    : location || ""}
                </p>
              </div>

              <div className="post__meta-inner">
                <p className="post__meta-date">
                  <i className="icon material-icons">date_range</i>

                  {new Date(date).toLocaleDateString("en-US", "short")}
                </p>

                <p className="post__meta-phone">
                  <i className="icon material-icons">phone</i>

                  {phoneNumber || ""}
                </p>
              </div>

              <div className="post__description">
                {description && description.length > 30
                  ? description.slice(0, 30) + "..."
                  : description || ""}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
