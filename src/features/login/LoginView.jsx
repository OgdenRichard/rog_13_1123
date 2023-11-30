function LoginView() {
  return (
    <>
      <form action="">
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <div className="input-remember">
          <label htmlFor="remember-me">Remember me</label>
          <input type="checkbox" id="remember-me" />
        </div>
        <button type="button" className="sign-in-button">
          Sign In
        </button>
      </form>
    </>
  );
}

export default LoginView;
