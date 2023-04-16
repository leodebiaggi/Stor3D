import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        
        <ul class="left hide-on-med-and-down">
        <li><img src="img/logoStor3D.png" alt="logo Stor3D" class="logoClass"/></li>
          <li><a href="anime.html">Anime</a></li>
          <li><a href="series.html">Series</a></li>
          <li><a href="superheroes.html">Superheroes</a></li>
          <li><a href="personalizados.html">Personalizados</a></li>
          <li><a href="decovarios.html">Deco/Varios</a></li>
          <li><CartWidget/></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
          <li><a href="anime.html">Anime</a></li>
          <li><a href="series.html">Series</a></li>
          <li><a href="superheroes.html">Superheroes</a></li>
          <li><a href="personalizados.html">Personalizados</a></li>
          <li><a href="decovarios.html">Deco/Varios</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        
      </div>
    </nav>
  );
};

export default NavBar;

