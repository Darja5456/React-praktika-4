import CharacterCard from '../components/CharacterCard/CharacterCard';

const characters = [
  { name: "Sveta", age: 35, job: "Mage", image: "https://pbs.twimg.com/media/CUcleNsUwAA6Mxi.png" },
  { name: "Antoshka", age: 29, job: "Hero", image: "https://media.licdn.com/dms/image/v2/C4E12AQGrbMEeJh76_w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1574289430538?e=2147483647&v=beta&t=zKI7lxit5aK8r-QxzdtEiCFwP3huiSBF3EdnaD51Xtk" },
  { name: "Xiaomi", age: 5, job: "Robot", image: "https://sketchok.com/images/articles/01-cartoons/106-the-wild-robot/01/23m.jpg" },
  { name: "Jura", age: 40, job: "Archer", image: "https://i.pinimg.com/736x/53/5a/25/535a25778fd6363a872962666247583e.jpg" },
  { name: "Zina", age: 62, job: "Healer", image: "https://t4.ftcdn.net/jpg/07/16/77/61/360_F_716776115_mRdcgmUPaZO3w9DHlPfcmtvjWOpOEJeE.jpg" },
  { name: "Vania", age: 19, job: "Soldier", image: "https://www.shutterstock.com/image-photo/full-body-image-indian-army-600nw-2648723525.jpg" }
];

function Practice1() {
  return (
    <div className="catalog">
      <div className="cards">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            props={character}
            showActions={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Practice1;