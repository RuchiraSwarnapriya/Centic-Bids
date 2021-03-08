import firestore from '@react-native-firebase/firestore';

// fetch auction item details
export const fetchAuctionItems = () => {
    // return firestore().collection('items').get();
    return firestore().collection('items')
        .get()
        .then(querySnapshot => querySnapshot
            .docs
            .map(d => ({
                id: d.id,
                ...d.data(),
            }),
            ));
};

// update auction item new price
export const updateItemDetails = (id, newBid) => {

    console.log(id, newBid)
    return firestore().collection('items').doc(id).update({
        currentBid: newBid,
    });

};