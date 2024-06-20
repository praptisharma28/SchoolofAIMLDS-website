import React, { useState, useEffect } from 'react';
import { FcLike } from 'react-icons/fc';
import { database, ref, set, onValue } from '../firebase/firebase';

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = ref(database, 'count');

  useEffect(() => {
    const unsubscribe = onValue(countRef, (snapshot) => {
      if (snapshot.exists()) {
        setCount(snapshot.val());
      } else {
        setCount(0);
      }
    });

    return () => unsubscribe();
  }, [countRef]);

  const handleClick = () => {
    const newCount = count + 1;
    set(countRef, newCount)
      .then(() => {
        // console.log('Count updated successfully:', newCount);
        setCount(newCount);
      })
      .catch((error) => {
        console.error('Error updating count in Firebase:', error);
      });
  };

  return (
    <button id="hitCounter" onClick={handleClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <span className='heart'><FcLike size={24} /></span> {count}
    </button>
  );
};

export default Counter;
