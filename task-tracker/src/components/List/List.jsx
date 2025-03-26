import "./List.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import more from "../../assets/icons/more_vert_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24.svg"
import ContextMenuBoard from "../ContextMenuBoard/ContextMenuBoard";

const List = ({items, onClick}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const currentBoardId = useSelector((state) => state.board.id);


  return (
    <div className="list__block">
      {items.map((item) => (
        <div className={`list ${currentBoardId === item.id ? "active" : ""}`} // Добавляем класс `active`
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={()=>onClick(item.id)}
        >
          {/* <div className="list__icon"></div> */}
          <h3 style={{flexGrow:1}}> # {item.name}</h3>
          <h4>
          {/* {hoveredIndex === item.id || activeMenuId === item.id ? ( 
              <div style={{ position: "relative" }} ref={menuRef}>
                <img
                  src={more}
                  alt="icon"
                  onClick={(e) => handleMoreClick(item.id, e)}
                  style={{ cursor: "pointer" }}
                />
                {activeMenuId === item.id && (
                  <div style={{ position: "absolute", left: "100%", top: 0, zIndex: 10 }}>
                    <ContextMenuBoard />
                  </div>
                )}
              </div>
            ) : (
              items.length
            )} */}
            {items.length}
          </h4>
        </div>
      ))  
    }
    </div>

    
  );
};

export default List;
