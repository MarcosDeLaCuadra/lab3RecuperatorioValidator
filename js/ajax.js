$(document).ready(function(){

    
    $("#myBtn").click(function(){
       
        $("#myModal").modal();
       
          
    });
     $("#Enviar").click(function(){
         var  datosConctatoLogin = {nombre: $("#nombre").val(), apellido: $("#apellido").val() , comentario: $("#comentario").val()};

            $.ajax({
                url: './testModal.php',
                type: 'POST',
                dataType: 'html',
                data: datosConctatoLogin,          
                async: true,
                beforeSend: function(){
                     $("#mostrarTabla").append("<img id='img' src='imagenes/spinner.gif'>"); 
                      // $("#mostrarTabla").html("<div id='img'> asdasdsa </div>");
                      
                },
                success: function(respuesta){
                  
                  $("#img").remove();
                  respuesta = JSON.parse(respuesta); 
                  
               
                 var tabla =' <div class="panel panel-default ">';
                  tabla += '<div class="panel-body input-group">';
                  tabla += 'fecha: '+ respuesta.fecha;
                  tabla +=   '<br>';
                  tabla += 'nombre: '+ respuesta.nombre + ' '+ respuesta.apellido;   
                  tabla +=   '<br>';
                  tabla += 'comentario : '+ respuesta.comentario; 
                  tabla +=   '</div>';
                  tabla +=  ' </div>';
                
                  
                  
                  $("#mostrarTabla").append(tabla);

                },
                error: function(respuesta){

                    alert("error");
                }



            })



         });

    $("#Ingresar").click(function(){

        var datosLogin = {email:  $("#Usuario").val() , password: $("#pass").val()};

        $.ajax({
            url: './test.php',
            type: 'POST',
            dataType: 'html',
            data: datosLogin,
            async: true,
            success: function(respuesta){
                alert(respuesta);
              respuesta=  JSON.parse(respuesta) 
               $('body').css('background-color', respuesta.color);
                alert(respuesta.user);
                window.location.replace('./index2.html');

            },
            error: function(respuesta){
              
                alert("asd");
            }



        })



    });

    ///BOOTSTRAP VALIDATOR
   });