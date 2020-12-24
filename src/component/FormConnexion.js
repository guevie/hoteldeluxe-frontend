import Title from '../component/Title'

function FormConnexion() {
  return (
    <>
    <section className="featured-rooms">
        <Title title="Vos informations" />
        <div className="featured-rooms-center">
          
        </div>
      </section>

      <form onSubmit="">
        <label htmlFor="username">Identifiant</label>
        <input id="username" type="text" name="username"></input>
        <label htmlFor="password">Mot de passe</label>
        <input id="password" type="password" name="password"></input>
        <button type="submit">Valider</button>
      </form>
    </>
  );
}

export default FormConnexion;
