const Planets = () => {
  const getPlanets = () => {
    const base_url = `http://localHost:1337/api/planets?populate=*`;
    fetch(base_url, {
      headers: {
        Authorization:
          "Bearer 847c6fac13a0954309cfac676aef71e09292951e4e33225a61b4ae04ee5e352dcd2fed03b6e0eab03fc7befb5a853d055c53ecd5d10211cbd98eecb7d1452bfc72779f29f77e418847090572debc542c768d7088f09137385314388cf38c01e987ba7cd3b9c31cf42ef60309835f9de5e2e30933043a22bcb5423ecec3225c3b",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  getPlanets();

  return (
    <div>
      <p>this is a test</p>
    </div>
  );
};

export default Planets;
