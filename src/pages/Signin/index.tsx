import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/AuthContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const handleSignIn = (e: any) => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      signIn();
    }
  };

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt='Logo do sistema de chamados' />
        </div>

        <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input
            type='email'
            placeholder='Type your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Type your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit'>Entrar</button>
        </form>

        <Link to='register'>Criar uma conta</Link>
      </div>
    </div>
  );
}

export default SignIn;
