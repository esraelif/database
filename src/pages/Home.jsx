import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BilgiList from '../components/BilgiList';
import AddBilgi from '../components/AddBilgi';


const Home = () => {
    const [tutorials, setTutorials] = useState([])
    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";





    //! Get(READ)****************************************
    const getTutorials = async () => {
        const veri = await axios.get(url)
        // console.log(veri.data)
        setTutorials(veri.data)


    };

    useEffect(() => {
        getTutorials();
    }, [])
    //!******************OR************************
    // useEffect(() => {
    //     axios.get(url).then((res) => setTutorials(res.data))
    // }, [])
    //! **************************************************




    //! POST(Create, database'e veri gönderme)**************************************

    const postTutorial = async (yeniVeri) => {
        await axios.post(url, yeniVeri)
        //tekrar verilerin güncel halini cekip diziye atmıs olduk ve ekran guncellendi.
        getTutorials()

    }
    //! *****************************************************************************

    //! DELETE (database'den silme)*************************************************

    const deleteTutorial = async (id) => {

        await axios.delete(`${url}${id}/`)
        getTutorials()

    }
    //! **************************************************************************
    //!EDIT (Database'de olan bir bir datayı degiştirme)**************************





    return (
        <>
            <AddBilgi postTutorial={postTutorial} />
            <BilgiList tutorials={tutorials} deleteTutorial={deleteTutorial} />

        </>
    );
}

export default Home;
