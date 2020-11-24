import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase(
  {
    name: 'Ad',
    location: 'default',
    createFromLocation: '~ad.db',
  },
  () => {
    console.log('OK veikia');
  },
  (error) => {
    console.log('Error:' + error);
  },
);
export const init = () => {
    db;
  };
