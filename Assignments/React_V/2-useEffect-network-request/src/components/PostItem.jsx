const PostItem = ({data}) => {
  return (
    <>
      {data.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <p>ID : {post.id}</p>
          <p>Title : {post.title}</p>
        </div>
      ))}
    </>
  );
};

export default PostItem