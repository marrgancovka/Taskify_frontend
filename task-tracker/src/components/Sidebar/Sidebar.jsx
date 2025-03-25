import "./Sidebar.css";
import List from "../List/List";
import { useState } from "react";
import chevron from "../../assets/icons/chevron_right_24dp_1F1F1F_FILL0_wght200_GRAD0_opsz24.svg";
import add from "../../assets/icons/add_24dp_1F1F1F_FILL0_wght200_GRAD0_opsz24.svg";

const Sidebar = ({ data, msg }) => {
  const myItems = data.filter(item => item.categories?.includes("мое"));
  const commonItems = data.filter(item => item.categories?.includes("общее"));
  const favoriteItems = data.filter(item => item.categories?.includes("избранное"));

  const [isMyOpen, setIsMyOpen] = useState(true);
  const [isCommonOpen, setIsCommonOpen] = useState(true);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(true);

  const toggleMyList = () => setIsMyOpen(!isMyOpen);
  const toggleCommonList = () => setIsCommonOpen(!isCommonOpen);
  const toggleFavoriteList = () => setIsFavoriteOpen(!isFavoriteOpen);

  return (
    <div className="sidebar">
      {msg && (
        <h4>{msg}</h4>
      )}

      {favoriteItems.length > 0 && (
        <div className="sidebar__part">
          <div className={`sidebar__part-title ${isFavoriteOpen ? "open" : ""}`}>
            <h3 style={{ flexGrow: 1 }}>Избранное</h3>
            <div className="icon chevron" onClick={toggleFavoriteList}>
              <img src={chevron} alt="chevron" />
            </div>
          </div>
          <div className={isFavoriteOpen ? "" : "collapsed"}>
            {isFavoriteOpen && <List items={favoriteItems} />}
          </div>
        </div>
      )}

      {/* Мои списки */}
      {myItems.length > 0 && (
        <div className="sidebar__part">
          <div className={`sidebar__part-title ${isMyOpen ? "open" : ""}`} >
            <h3 style={{ flexGrow: 1 }}>Мои списки</h3>
            <div className="icon add"><img src={add} alt="add" /></div>
            <div className="icon chevron" onClick={toggleMyList}>
              <img src={chevron} alt="chevron" />
            </div>
          </div>
          <div className={isMyOpen ? "" : "collapsed"}>
            {isMyOpen && <List items={myItems} />}
          </div>
        </div>
      )}

      {/* Общие списки */}
      {commonItems.length > 0 && (
        <div className="sidebar__part">
          <div className={`sidebar__part-title ${isCommonOpen ? "open" : ""}`} >
            <h3 style={{ flexGrow: 1 }}>Общие списки</h3>
            <div className="icon add"><img src={add} alt="add" /></div>
            <div className="icon chevron" onClick={toggleCommonList}>
              <img src={chevron} alt="chevron" />
            </div>
          </div>
          <div className={isCommonOpen ? "" : "collapsed"}>
            {isCommonOpen && <List items={commonItems} />}
          </div>
        </div>
      )}

    </div>
  );
};

export default Sidebar;
