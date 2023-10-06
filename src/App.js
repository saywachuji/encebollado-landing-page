import './App.css';
import YouTubeEmbed from './YouTubeEmbed';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" >
    <a class="navbar-brand " href="#">A Taste of Ecuador</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#home">Home</a>
        <a class="nav-link" href="#">Recipe</a>
        <a class="nav-link" href="#">History</a>
        <a class="nav-link" href="#">Restaurants</a>
      </div>
    </div>
  </div>
</nav>
      </header>

<section id='home'>
  <div className='home-container text-center'>
  
      <h1>Encebollado</h1>
      <h2>An exquisite journey to the ecuadorean coastal flavors</h2>
      <a href='#restaurants'>Taste the Magic</a>
  
  </div>
</section>

<section id='history'>
  <div className='history-container'>
    <div className='title-image history-title'><h3 className='text-center'>A quick history of the Encebollado</h3></div>
  

   <div className="row text-center">
    <div className="col-md-6">Column</div>
    <div className="col-md-6">Column</div>
  </div>

   <div className="row text-center">
    <div className="col-md-6">Column</div>
    <div className="col-md-6">Column</div>
 </div>
 </div>
</section>

<section id='recipe'>
<div className='recipe-container'>
  <div className='title-image recipe-title'><h3 className='text-center'>Recipe</h3></div>
    <div className="fluid-container text-center">
      <div className="row">
        <div className="col-md-4">
          <h4>Ingredients</h4>
        </div>
        <div className="col-md-4">
          <h4>Instructions</h4>
        </div>
        <div className="col-md-4">
          <h4>Video</h4>
          <YouTubeEmbed />
        </div>
      </div>
    </div>
</div>
</section>

<section id='restaurants'>
  <div className='restaurants-container'>
    <div className='title-image restaurants-title'><h3 className='text-center'>Ready to taste it?</h3></div>
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-lg-4">
        <h5>Encebollado Cuarto de Libra</h5>
        <iframe className='fluid 'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63791.37864518554!2d-79.9450050655223!3d-2.1684723688383336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d4626400e95%3A0xd5dc069abb9a6404!2sEncebollado%20Cuarto%20de%20libra!5e0!3m2!1sen!2sus!4v1696630935112!5m2!1sen!2sus" width="450" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="col-lg-4">
          <h5>King of Encebollado</h5>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021186.7027183948!2d-79.83769159512325!3d-1.1529496323876633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58ee029ec3265%3A0xf4a8baf89d2501c5!2sKing%20of%20Encebollado!5e0!3m2!1sen!2sus!4v1696631475731!5m2!1sen!2sus" width="450" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="col-lg-4">
        <h5>El Gato de la Octava</h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021187.7414653202!2d-79.8377010121036!3d-1.150050104602412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6e0f951bfa13%3A0xce2239f4cbe3ed42!2sEL%20GATO%20DE%20LA%20OCTAVA!5e0!3m2!1sen!2sus!4v1696631590860!5m2!1sen!2sus" width="450" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default App;
