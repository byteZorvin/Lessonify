import React , {useState ,useEffect} from 'react'
import "./profile.css";
import avatar from "./avatar.jpeg"



const  Profile = (props)=>{




//  useEffect(()=>{

//      fetch('http://localhost:8080/test/typing', {
//             headers: {
//               Authorization: 'Bearer ' + props.token
//             },
//           })
//             .then(res => {

//               return  res.json();
//             })
//             .then(resData => {

//               console.log(resData.score)
//                 arr.push(resData.score[0])
                
//                 console.log(arr)
//             })
           
//             .catch(err => {
//               console.log(err);
//             });


  
//   },[])


  return (
  
  <div class="container">
    <div id="profile">   
    <div class="row">
      <div class="col-lg-12">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img style={{height:"100px",width:"100px",borderRadius:"50%"}} class="profile_img" src={avatar} alt=""/>
            <h3>Demo User</h3>
          </div>
          <div class="card-body">
            <h6 class="mb-0"><strong class="pr-1">Student ID:</strong>622854d4a27b7122dcb65c06</h6>
            <h6 class="mb-0"><strong class="pr-1">Mail : </strong>demo@gmail.com</h6>
          </div>
        </div>
      </div>
      </div>
      </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Typing Test</th>
      <th scope="col">Picture Vocabulary Test</th>
      <th scope="col">Quiz Test</th>
    </tr>
  </thead>

  <tbody>
<tr>
<th scope="row">1</th>
<td>2</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<th scope="row">2</th>
<td>3</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<th scope="row">3</th>
<td>4</td>
<td>7</td>
<td>0</td>
</tr>
  
  
 </tbody>
</table>





      </div>
   
  )
}


export default Profile;