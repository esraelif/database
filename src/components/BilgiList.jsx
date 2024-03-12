import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from './EditBilgi';

const BilgiList = ({ tutorials, deleteTutorial }) => {
    //*Home'da fonksiyonu yazdık,burada fonk. cagır:
    // const deleteTutorial = async (id) => {

    //     await axios.delete(`${url}/${id}/`)

    // }
    //******************************************* */
    const [item, setItem] = useState("")


    // console.log(tutorials)

    return (
        <div className="container mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="text-center">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tutorials.map(({ id, title, description }) => {
                        return (
                            <tr key={id}>
                                <th>{id}</th>
                                <td>{title}</td>
                                <td>{description} </td>
                                <td className="text-center ">
                                    <AiFillDelete type='button'
                                        className='text-danger'
                                        size={22}
                                        onClick={() => deleteTutorial(id)}

                                    />
                                    {/* bootstrapten hareketli bir yapı olan modal kullanacağım için index.html e bootstrap in script etiketini ekledik */}
                                    <FaEdit type='button' className='text-warning me-2' size={22}
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                        onClick={() => setItem({ id, title, description })}
                                    />


                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* //****MODAL*************** */}
            <EditBilgi item={item} setItem={setItem} />

        </div>
    );
}

export default BilgiList;
