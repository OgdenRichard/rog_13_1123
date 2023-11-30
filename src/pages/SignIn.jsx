import LoginView from '../features/login/LoginView';

function SignIn() {
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon" />
          <h1>Sign In</h1>
          <LoginView />
        </section>
      </main>
    </>
  );
}

export default SignIn;
