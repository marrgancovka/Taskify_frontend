import "./Comment.css";

const Comment = ({comment}) => {
  return (
    <div className="comment">
        <div className="comment__user">
            <div className="comment__avatar">Ma</div>
            <h4>Margarita</h4>
        </div>
        <div className="comment__content">
            Я выполню это задачу лучше чем кто-то... Я выполню это задачу лучше чем кто-то... Я выполню это задачу лучше чем кто-то... Я выполню это задачу лучше чем кто-то...
        </div>
    </div>
    );
};

export default Comment;
