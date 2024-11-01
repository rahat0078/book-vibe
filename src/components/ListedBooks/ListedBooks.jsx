import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utilities/addToread';

const ListedBooks = () => {

    const [readlist , setReadlist] = useState([])
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadlist(readBookList)
    }, [])
    return (
        <div className='container mx-auto'>
            <h3>Bookd sdfsdkfi liskgsdj fdsoieijv  ejewijfv foe30ddwsedfods     </h3>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>books read: {readlist.length}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;