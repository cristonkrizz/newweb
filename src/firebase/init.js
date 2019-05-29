import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyDctUcEtcfV0n3jF8PC0keFlKEDWk0m6a0',
  authDomain: 'newweb-8aaf4.firebaseapp.com',
  databaseURL: 'https://newweb-8aaf4.firebaseio.com',
  projectId: 'newweb-8aaf4',
  storageBucket: 'newweb-8aaf4.appspot.com',
  messagingSenderId: '315109190709',
  appId: '1:315109190709:web:43cecc941507db6c'
}

firebase.initializeApp(config)
