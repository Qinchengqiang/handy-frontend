import React from "react";


function Star({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: "#ff9933" }} role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}

// typeof props.rating == "number" ? 
function StarRating(props) {
  const [rating, setRating] = React.useState(
    props.rating || 0
  );
  const [selection, setSelection] = React.useState(0);
  const hoverOver = e => {
    let selected = 0;
    if (e && e.target && e.target.getAttribute("star-id")) {
      selected = e.target.getAttribute("star-id");
    }
    setSelection(selected);
  };
  const handleReviewCount = props.handleReviewCount
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={e => {
        setRating(e.target.getAttribute("star-id") || rating);
        handleReviewCount();
      }
      }
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (elem, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1} `}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
}

export default function starRatingHoc(rating, handleReviewCount) {
  return (
    <StarRating rating={rating} handleReviewCount={handleReviewCount} />
  );
}