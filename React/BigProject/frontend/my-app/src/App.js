import './App.css';
import RegistrationLayout from './components/layouts/RegistrationLayout/RegistrationLayout';
import SignOutButton from './components/SignOutButton/SignOutButton';
import SignInLayout from './components/layouts/SigninLayout/SigninLayout';

function App() {
  return (
    <div>
      <SignOutButton />
      <SignInLayout />
      {/* <RegistrationLayout /> */}
    </div>
  );
}

export default App;
