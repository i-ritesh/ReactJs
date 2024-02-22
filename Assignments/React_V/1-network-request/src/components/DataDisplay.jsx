const DataDisplay = ({data}) => {
  return (
    <>
      {data.map((post) => (
        <div key={post.id} style={{border:'1px solid white', margin:'10px', padding:'10px'}}>
          <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DataDisplay