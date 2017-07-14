<?php
    sleep(1);
    $json =['nombre' => $_POST['nombre'], 'apellido' => $_POST['apellido'], 'comentario' => $_POST['comentario'] , 'fecha' => date('m/d/y')];
    echo json_encode($json);

?>