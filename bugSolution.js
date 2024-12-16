const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log(uid);
  } else {
    // User is signed out
  }
});

return () => {
  unsubscribe(); // Unsubscribe when component unmounts
};