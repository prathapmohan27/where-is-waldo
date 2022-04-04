import { initializeApp } from 'firebase/app';

import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

export const savePlayer = async (
  name: string,
  mins: number,
  sec: number,
  totalTime: number
) => {
  try {
    await addDoc(collection(getFirestore(), 'players'), {
      name: name,
      mins: mins,
      sec: sec,
      totalTime: totalTime,
    });
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error);
  }
};

export const getPlayersFirestore = async () => {
  let data: any[] = [];
  const fetchPlayer = await getDocs(collection(getFirestore(), 'players'));
  fetchPlayer.docs.forEach((doc) => {
    data.push({ ...doc.data() });
  });
  return data;
};

export const getCoordFirestore = async (name: string) => {
  let data;
  const fetchData = await getDocs(collection(getFirestore(), `${name}`));
  fetchData.docs.forEach((doc) => {
    data = Object.assign({ ...doc.data() });
  });
  return data;
};

const firebaseConfig = {
  apiKey: 'AIzaSyBaiYUlWk8kvMVyAEmkdZ9ymVB9qZzOnwQ',
  authDomain: 'where-is-waldo-55021.firebaseapp.com',
  projectId: 'where-is-waldo-55021',
  storageBucket: 'where-is-waldo-55021.appspot.com',
  messagingSenderId: '728875540429',
  appId: '1:728875540429:web:d7c3efe42ee59828fb6e84',
};

initializeApp(firebaseConfig);
