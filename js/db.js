// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

// real-time listener
db.collection('shortcuts').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added'){
      renderShortcut(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      removeShortcut(change.doc.id);
    }
  });
});

// add new shortcut
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const shortcut = {
    name: form.title.value,
    input: form.input.value
  };

  db.collection('shortcuts').add(shortcut)
    .catch(err => console.log(err));

  form.title.value = '';
  form.input.value = '';
});

// remove a shortcut
const shortcutContainer = document.querySelector('.shortcuts');
shortcutContainer.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    //console.log(id);
    db.collection('shortcuts').doc(id).delete();
  }
})