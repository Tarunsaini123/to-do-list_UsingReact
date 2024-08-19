function AddItems(props) {
    return (
      <>
        <li>{props.element}</li>
        <button
          onClick={() => {
            props.deleteItems(props.index);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            props.updateItems(props.index);
          }}
        >
          Update
        </button>
      </>
    );
  }
  export default AddItems;