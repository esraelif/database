import React from 'react';

const EditBilgi = ({ item, setItem }) => {
    const { id, title, description } = item
    return (
        <div
            //! id ve target(BilgiListteki butonun) aynı olmalı
            class="modal fade"
            id="editModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-5" id="exampleModalLabel">
                            Modal
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        {/* //! INPUTLAR(Modal içi)******************************** */}
                        <div className='mb-3'>
                            <label htmlFor="title">Title</label>
                            <input type="text" className='form-control' id="title" value={title || ""}
                                onChange={(e) => setItem({ ...item, title: e.target.value })} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="desc">Description</label>
                            <input type="text" id="desc" className='form-control' value={description || ""}
                                onChange={(e) => setItem({ ...item, description: e.target.value })} />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditBilgi;
