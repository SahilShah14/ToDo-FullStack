import { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <nav className="bg-gray-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-purple-500">MadTasker</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-300">
              {isLogin ? 'Sign in to your account' : 'Create new account'}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              {isLogin ? 'Welcome back!' : 'Start managing your tasks today'}
            </p>
          </div>

          {isLogin ? <LoginForm /> : <SignupForm />}

          <div className="text-center mt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-purple-400 hover:text-purple-300"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
