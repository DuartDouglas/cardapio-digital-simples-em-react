const app = document.getElementById('app');

const products = [
   { id: 1, name: "Burguer A", description: "Pão, hamburguer 160g, bacon, cheddar e molho especial da casa.", price: 28.90, imgSrc: "images/burguer-a.png" },
   { id: 2, name: "Burguer B", description: "Pão, hamburguer 160g, bacon, cheddar e molho especial da casa.", price: 32.00, imgSrc: "images/burguer-b.png" },
   { id: 3, name: "Burguer C", description: "Pão, hamburguer 160g, bacon, cheddar e molho especial da casa.", price: 37.00, imgSrc: "images/burguer-c.png" },
   { id: 4, name: "Burguer D", description: "Pão, hamburguer 160g, bacon, cheddar e molho especial da casa.", price: 42.00, imgSrc: "images/burguer-d.png" },
   { id: 5, name: "Burguer E", description: "Pão, hamburguer 160g, bacon, cheddar e molho especial da casa.", price: 45.00, imgSrc: "images/burguer-e.png" },
   { id: 6, name: "Suco de Laranja", price: 10.00, description:"", imgSrc: "images/suco-laranja.png" },
   { id: 7, name: "Suco de limão", price: 8.00, description:"", imgSrc: "images/suco-limonada.png" },

]


function ItemMenu({name, description, price, imgSrc}) {

   let descriptionContent; 
   if (description === "") {
      descriptionContent = "";
   } else {
      descriptionContent = <p>{description}</p>;
   }

   return (
      <li  className="item-menu">
         <div className="col">
            <h4>{name}</h4>
            {descriptionContent}
             
            <p className="price">R$ {price}</p>
         </div>
         <div className="col">
            <img src={imgSrc} width={100} height={100} alt={name} />
         </div>
      </li>
   );
}


function App() {
   return (
      <div className="container">
         <header className="header">
            <h1>Cardápio digital em React</h1>
         </header>
         <main>
            <h2>Menu</h2>
            <ul className="container-menu">
               {products.map(product => (

               <ItemMenu
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imgSrc={product.imgSrc}
               />
               ))}
              
            </ul>
         </main>
      </div>
   );
}

ReactDOM.render(<App />, app);


