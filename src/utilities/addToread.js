const getStoredReadList = () => {
    const getStoredListStr = localStorage.getItem("read-list")
    if (getStoredListStr) {
        const storedList = JSON.parse(getStoredListStr);
        return storedList
    } else {
        return []
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)) {
        alert("already selected")
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
    }
}


const getStoredWishList = () => {
    const getStoredListStr = localStorage.getItem("wish-list")
    if(getStoredListStr){
        const storedList = JSON.parse(getStoredListStr);
        return storedList
    } else {
        return []
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList()
    if(storedList.includes(id)){
        alert('already exists')
    } else  {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
    }
}

export {addToStoredReadList, addToStoredWishList, getStoredReadList}