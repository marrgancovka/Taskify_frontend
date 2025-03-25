import "./List.css";
import { useState } from "react";
import more from "../../assets/icons/more_vert_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg"

const List = ({items}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="list__block">
      {items.map((item) => (
        <div className="list" 
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* <div className="list__icon"></div> */}
          <h3 style={{flexGrow:1}}> # {item.name}</h3>
          <h4>
            {hoveredIndex === item.id ? (
              <img src={more} alt="icon" />
            ) : (
              items.length
            )}
          </h4>
        </div>
      ))  
    }
    </div>

    
  );
};

export default List;
