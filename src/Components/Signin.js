 import './Signin1.css'
// import React,{useState} from 'react';
 import {Link} from "react-router-dom"
// const Signin = () => {

//   const[user,setUser]=useState(null);
//   const[pass,setPass]=useState(null);

//   const handleChange = (a) => {
//     const{id,value}=a.target;
//     if(id==="user"){
//       setUser(value);
//     }
//     if(id==="pass"){
//       setPass(value);
//     }
//   }

//   const handleSubmit1 = () => {
//     console.log(user,pass);
//     if(user==="Gowtham"){
//       if(pass==="1234")
//       alert("Logged in Successfully");
//     }
//     else{
//       alert("Check credentials");
//     }

//   }
//   return (
//    <div className='bodysignin'>
//     <div className="containersign">
      
//         <div className="boxsign">
//         <div className='image'></div>
          
//           <h3> Sign in and start managing your DATA! </h3>

//             <input type="text" placeholder="Username" className="inputname" id="user" value={user} onChange={(a) => handleChange(a)} required></input>
//             <input type="password" placeholder="Password" className="password" id="pass" value={pass} onChange={(a) => handleChange(a)} required ></input>    

//             <h2 className="forgotpassword"><a href=''>Forgot password?</a></h2>
     
//             <button className="logbutton" onClick={() => handleSubmit1()}>   <Link to="Navigation">Login</Link> </button>
//             <h6>Dont have an account?<br /><br />
//             <button className="logbutton1"><Link to="Signup">SignUp</Link>    </button></h6>
          
//             {/* <span className="create-account">CREATE ACCOUNT</span> */}
//           </div>
//         </div>
        
//      </div>
   
//   );
// };
// export default Signin;



// import React from 'react';
// import './Signin1.css';

// const Signin = () => {
//   return (
//     <div className="sign-in-page">
//       <div className='imag'></div>
//       <div className="form-container">
//         <h2>Sign In</h2>
//         <form>
//           <div className="form-group">
//             {/* <label htmlFor="username">Username:</label> */}
//             <input type="email" id="username" placeholder='Username'/>
//           </div>
//           <div className="form-group">
//             {/* <label htmlFor="password">Password:</label> */}
//             <input type="password" id="password" placeholder='Password' />
//           </div>
//           <br />
//           <button type="submit">Sign In</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signin;


import React from 'react';


const Signin = () => {
  return (
    <div className="two-halves-page">
     
      <div className="image-side">
        {/* Add your image here */}
       <div className='imag'></div>
      </div>

      <div className="content-side">
        {/* Add your content here */}
        <br /><br /><br /><br /><br />
        <h2>Create your Account </h2>
        <form>
           <div className="form-group">
           <label className='label'>Name</label>
            <input className='inputbo' type="text" id="name" placeholder=''/>

            <br /><br /><br />

             <label className='label'>Email</label>
            <input className='inputbo' type="email" id="username" placeholder=''/>
           
           <br /><br /><br />
             <label className='label'>Password</label>
             <input className='inputbo' type="password" id="password" placeholder='' /><br /><br />

             <input className='check' type="checkbox"></input><span>Agree to Terms and Conditions</span>
           </div>
           <br />
           <button className='butto' type="submit"><Link to="Navigation">Sign In</Link></button>
         </form>
      </div>
    </div>
  );
};

export default Signin;
