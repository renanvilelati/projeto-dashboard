import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.png';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt='Logo do sistema de chamados' />
        </div>

        <form>
          <h1>Nova conta</h1>
          <input
            type='text'
            placeholder='Digite seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='email@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='email@email.com'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Cadastrar</button>
        </form>

        <Link to='register'>Já possui uma conta? Faça login</Link>
      </div>
    </div>
  );
}

export default SignUp;
