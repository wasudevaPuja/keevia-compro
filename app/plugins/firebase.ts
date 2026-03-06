// plugins/firebase.js
import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBBIJh0MQCThEv3dNc8mK8IrtWeVn9y2Bs',
    authDomain: 'felix-wedding-resvp.firebaseapp.com',
    databaseURL: 'https://felix-wedding-resvp-default-rtdb.firebaseio.com',
    projectId: 'felix-wedding-resvp',
    storageBucket: 'felix-wedding-resvp.firebasestorage.app',
    messagingSenderId: '1014857657785',
    appId: '1:1014857657785:web:7372f455cb7201036a1a68',
    measurementId: 'G-97TGYK9NH2'
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  nuxtApp.provide('firebase', {
    db,
    collection,
    addDoc,
    serverTimestamp
  })
})
