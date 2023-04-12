import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "두밧두",
        comment: "와리와리"
    },
    {
        name: "채씨 집안",
        comment: "그게 몬데"
    },
];

function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;