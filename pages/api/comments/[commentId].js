import { comments } from "../../../data/comments";
export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GEt") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedcomment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const index = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    comments.splice(index, 1);
    res.status(200).json(deletedcomment);
  } else if (req.method === "PATCH") {
    const modifiedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    // modifiedComment.text = "modified";
    res.status(200).json(modifiedComment);
  }
}
