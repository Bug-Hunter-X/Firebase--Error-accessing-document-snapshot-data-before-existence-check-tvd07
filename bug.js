The Firebase SDK may throw an error if you try to access a property of a document snapshot before the `snapshot.exists` property has been checked and it returns `false`.  This can lead to unexpected behavior or crashes, particularly if the data you are trying to access is not guaranteed to exist.  For example:

```javascript
const snapshot = await getDoc(docRef);
const city = snapshot.data().city; // Error if snapshot.exists is false
```

This code will throw an error if the document does not exist. The correct way to check is to always first ensure that the document exists before accessing its data.

```javascript
const snapshot = await getDoc(docRef);
if (snapshot.exists()) {
  const city = snapshot.data().city;
  console.log(city);
} else {
  console.log('Document does not exist!');
}
```