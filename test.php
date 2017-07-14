<?php

    $json =['user' => $_POST['email'] , 'pass' => $_POST['password'] ,'color' => 'blue'];
    echo json_encode($json);

?>