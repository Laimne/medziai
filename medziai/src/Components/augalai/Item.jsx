function Item({ data, modal, remove }) {
    const showEdit = () => {
      modal(data);
    };
  
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.class}</td>
        <td>{data.height}</td>
        <td> <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button> </td>
        <td>  <button className="btn btn-danger" onClick={()=> remove(data)}>
          Delete
        </button></td>
      </tr>
    );
  }
  
  export default Item;