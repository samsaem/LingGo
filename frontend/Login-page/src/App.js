function App() {
  return (
    <div>
      <h1>Login</h1>
        <h2>Sign in to your account</h2>
       <div>
           <input className="user_loginname" type="text" name="UserLogin" id="UserLogin" placeholder="Login ID"/>
       </div>
        <div>
        <input className="user_password" type="password" name="UserPassword" id="UserPassword" placeholder="Password"/>
        </div>
    </div>
    )


}

export default App;
