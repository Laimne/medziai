import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
  const [inputs, setInputs] = useState({
    name: "",
    class: "",
    height: "",
  });

  const control = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  useEffect(() => {
    setInputs({
      
      name: modalInputs.name,
      class: modalInputs.class,
      height: modalInputs.height,
    });
  }, [modalInputs]);

  const handleEdit = () => {
    edit(
      {
    
        name: inputs.name,
        class: inputs.class,
        height: inputs.height,
      },
      modalInputs.id
    );
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        display: showModal ? "block" : "none",
        opacity: showModal ? "1" : "0",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit X
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              
              <div className="form-group">
                <label htmlFor="th2" className="col-form-label">
                  name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="th2"
                  value={inputs.name}
                  onChange={(e) => control(e, "name")}
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="th3" className="col-form-label">
                  class
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="th3"
                  value={inputs.class}
                  onChange={(e) => control(e, "class")}
                  placeholder="Enter class"
                />
              </div>

              <div className="form-group">
                <label htmlFor="th4" className="col-form-label">
                  height
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="th4"
                  value={inputs.height}
                  onChange={(e) => control(e, "height")}
                  placeholder="Enter height"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={hide}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;