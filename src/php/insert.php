<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));
$request = $data->request;
// Fetch All records
if($request == 1){
    $userData = mysqli_query($con,"select * from users order by id desc");
  
    $response = array();
    while($row = mysqli_fetch_assoc($userData)){
      $response[] = $row;
    }
  
    echo json_encode($response);
    exit;
  }
  
  // Add record
  if($request == 2){
    $username = $data->username;
    $first_name = $data->first_name;
    $last_name = $data->last_name;
    $password = $data->password;
    $confirm_password = $data->confirm_password;
    $age = $data->age;
    $email = $data->email;
  
    $userData = mysqli_query($con,"SELECT * FROM users WHERE User_Name='".$username."'");
    if(mysqli_num_rows($userData) == 0){
      mysqli_query($con,"INSERT INTO users(User_Name,First_Name,Last_Name,Age,Password,Email)
       VALUES('".$username."','".$first_name."','".$last_name."','".$age."'
       ,'".$password."','".$email."')");
      echo "Insert successfully";
    }else{
      echo "Username already exists.";
    }
  
    exit;
  }