<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="leasing,arrendamiento,arrendamiento puro,pure leasing,puro,auto,autos,nuevo.nuevos,alquilar auto,arrendar auto, leasing mexico,firmacar,firma,car,firmacar mexico"/>
    <meta name="description" content="Firma Car ofrece arrendamiento puro para personas morales y físicas con actividad empresarial."/>
    <meta name="author" content="Jovanny Ulloa">
    <link href="favicon.ico" rel="icon" type="image/x-icon"/>
    <title>Firma Car</title>
    <?php 
    include("includes/analyticstracking.php");
    include("includes/css.php");
    ?>
  </head>
  <body>
    <div class="container-fluid">
      <?php 
      include ("includes/menu.php"); 
      ?>
      <div id="contenidoMenu">
        <!--Carrusel-->
        <div id="carruselFirmacar" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="img/arrendamiento_firmacar.jpg" alt="First">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="img/beneficios_firmacar.jpg" alt="First">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="img/flotillas_arrendamiento_firmacar.jpg" alt="First">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="img/estrenar_auto_firmacar.jpg" alt="First">
            </div>
          </div>
        </div>
        <!--Ideas principales-->
        <section class="text-center my-5">
          <div class="row ideasPrincipales">
            <div class="col-md-4">
              <i class="fas fa-building fa-3x"></i>
              <h5 class="font-weight-bold my-4">Nuestro giro</h5>
              <p class="grey-text mb-md-0 mb-5">Ofrecemos arrendamiento puro para personas morales y físicas con actividad empresarial.
              </p>
            </div>
            <div class="col-md-4">
              <i class="fas fa-check-circle fa-3x"></i>
              <h5 class="font-weight-bold my-4">Beneficios</h5>
              <p class="grey-text mb-md-0 mb-5">Aprovecha los mejores años del auto sin tener que comprarlo. <b>Leasing</b> es la fórmula más usada en el mundo para hacerse de un auto.
              </p>
            </div>
            <div class="col-md-4">
              <i class="fas fa-car fa-3x"></i><i class=""></i>
              <h5 class="font-weight-bold my-4">Arrendamiento Firma Car</h5>
              <p class="grey-text mb-0">Autos nuevos de todas las marcas. Desde un auto hasta flotillas.
              </p>
            </div>
            <div class="col-md-4">
              <i class="fas fa-dollar-sign fa-3x" style="margin-top: 10%;"></i>
              <h5 class="font-weight-bold my-4">Estrena en 5 pasos</h5>
              <p class="grey-text mb-0">Inicia solicitando una cotización.<a href="http://firmacar.com/sistema/">Haz clic aquí para acceder al sistema.</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <!-- Footer y scripts JS -->
      <?php 
      include ("includes/footer.php");
      include ("includes/js.php"); 
      ?>
    </div>
  </body>
</html>