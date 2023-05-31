import React from 'react';
import './App.css';
import BaseComponent from './BaseComponent/BaseComponent';
import './BaseComponent/BaseComponent.scss';
import UserManagement from './UserManagement/UserManagement';

function App() {
  return (
    <div>
      {/* <BaseComponent title='ARC' name='Shubham Kadbe'/> */}
      {/* <UserManagement isLogin={false} /> */}
      <UserManagement isLogin={true} />
    </div>
  );
}

export default App;
