import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const BilgiList = ({ tutorials, deleteTutorial }) => {
    //*Home'da fonksiyonu yazdık,burada fonk. cagır:
    // const deleteTutorial = async (id) => {

    //     await axios.delete(`${url}/${id}/`)

    // }
    //******************************************* */



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
                                    <FaEdit type='button' className='text-warning me-2' size={22} />


                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default BilgiList;
