$(document).ready(function() {
   $('#clients').click(function(){
      $.ajax({
            type: "POST",
            url: "registroClientes.php",
            success: function(a) {
                $('#cuadro').html(a);
            }
       });
   });

   $('#locales').click(function(){
      $.ajax({
            type: "POST",
            url: "registroSurcursal.php",
            success: function(a) {
                $('#cuadro').html(a);
            }
       });
   });

   $('#empleado').click(function(){
      $.ajax({
            type: "POST",
            url: "registroEmpleado.php",
            success: function(a) {
                $('#cuadro').html(a);
            }
       });
   });
   $('#proveedores').click(function(){
      $.ajax({
            type: "POST",
            url: "registrarProveedor.php",
            success: function(a) {
                $('#cuadro').html(a);
            }
       });
   });



});