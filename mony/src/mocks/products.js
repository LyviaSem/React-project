import Burger from '../img/burger.png'
import Pizza from '../img/pizza.png'
import Salade from '../img/salade.png'
import Pates from '../img/pates.png'
import Boisson from '../img/boisson.png'
import Dessert from '../img/dessert.png'

export const PRODUCTS = [
    {
       idcategory: 1,
       category: "Burger",
       image: Burger,
       specificRegime: [
            {
                idregime:1,
                name: "Avenue Matignon",
                specificRegimeName: "Burger Poulet",
                plat: [
                    {
                        idplat: 1,
                        title: "Le Cheddar Poulet",
                        ingredient: "Oignons, Cornichons, Poulet panés, Cheddar, Sauce blanche",
                        allergenes:"Gluten, Graine de sésame, Lait",
                        price: 50
                    },
                    {
                        idplat: 2,
                        title: "Le Mexicain",
                        ingredient: "Poulet panés, Guacamole, Tomates, Oignon, Mozarrella",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 3,
                        title: "Le Chèvre Miel",
                        ingredient: "Poulet panés, Chèvre, Sauce au miel, Salade, Tomate, Oignon caramélisé",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            },
            {
                idregime:2,
                name: "Boulevard Malesherbes",
                specificRegimeName: "Burger Boeuf",
                plat: [
                    {
                        idplat: 4,
                        title: "Le Raclette",
                        ingredient: "Steak haché, Salade, Fromage à raclette, Sauce moutarde à l’ancienne, Tomates , Oignon",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 5,
                        title: "Le Cheeseburger",
                        ingredient: "Boeuf, Cornichon, Tomates, Cheddar, Ketchup",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 6,
                        title: "Le Big Breakfast",
                        ingredient: "Boeuf, Bacon, Cheddar, Oeuf, Oignon",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            },
            {
                idregime:3,
                name: "Avenue Henry-Martin",
                specificRegimeName: "Burger Veggie",
                plat: [
                    {
                        idplat: 7,
                        title: "Le Chèvre Pané",
                        ingredient: "Chèvre pané, Tomates, Salade, Sauce blanche",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 8,
                        title: "Le Veggie Mexicain",
                        ingredient: "Cheddar, Tomates, Choux, Avocat, Palet de légumes",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 9,
                        title: "Le Veggie Gouda",
                        ingredient: "Salade, Gouda, Oignon, Sauce moutarde, Escalope végétarienne",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            }
        
       ]
    },
    {
        idcategory: 2,
        category: "Pizza",
        image: Pizza,
        specificRegime: [
            {
                idregime:4,
                name: "Faubourg Saint-Honoré",
                specificRegimeName: "Pizza Napolitaine",
                plat: [
                    {
                        idplat: 10,
                        title: "La Margherita",
                        ingredient: "Sauce tomate, Mozzarella, Basilic, Huile d’olive",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 11,
                        title: "La Saucisse Italienne",
                        ingredient: "Sauce tomate, Mozzarella, Saucisses italiennes, Oignons rouge, Poivrons vert, origan",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 12,
                        title: "La Légumes Grillés",
                        ingredient: "Sauce tomate, Mozzarella, Aubergines, Courgettes, Poivrons rouges, Oignons rouges, Origan",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            },
            {
                idregime:5,
                name: "Place de la Bourse",
                specificRegimeName: "Pizza Classique",
                plat: [
                    {
                        idplat: 13,
                        title: "La Pepperoni",
                        ingredient: "Sauce tomate, Mozzarella, Pepperoni, Champigons, Oignons rouges, Origan",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 14,
                        title: "La Quatre Fromages",
                        ingredient: "Sauce tomate, Gorgonzola, Roquefort, Parmesan rapé, Basilic",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 15,
                        title: "La Jambon Champignons",
                        ingredient: "Sauce tomate, Jambon, Mozzarella, Champignons, Origan",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            },
            {
                idregime:6,
                name: "Rue Lafayette",
                specificRegimeName: "Calzone",
                plat: [
                    {
                        idplat: 16,
                        title: "La Épinards Mozzarella",
                        ingredient: "Épinards hachés, Mozzarella, Ricotta, Oignons, Origan",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 17,
                        title: "La Boursin",
                        ingredient: "Tomates séchées, Boursin, Mozzarella, Ricotta, Origa",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 18,
                        title: "La Saumon Fumé",
                        ingredient: "Saumon fumé, Mozzarella, Ricotta, Oignons, Origan",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            }
        ]
    },
    {
        idcategory: 3,
        category: "Salade",
        image: Salade,
        specificRegime: [
            {
                idregime: 7,
                name: "Boulevard des Capucines",
                specificRegimeName: "Salade viande",
                plat: [
                    {
                        idplat: 19,
                        title: "Salade César",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 20,
                        title: "Salade Lyonnaise",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 21,
                        title: "Salade Savoyarde",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    }
                ]
            },
            {
                idregime: 8,
                name: "Avenue Foch",
                specificRegimeName: "Salade Poisson",
                plat: [
                    {
                        idplat: 22,
                        title: "Salade Océane",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 23,
                        title: "Salade Norvégiene",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 24,
                        title: "Salade Niçoise",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    }
                ]
            },
            {
                idregime: 9,
                name: "Avenue de Breteuil",
                specificRegimeName: "Salade Veggie",
                plat: [
                    {
                        idplat: 25,
                        title: "Salade Greque",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 26,
                        title: "Salade Chèvre Chaud",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 27,
                        title: "Salade Arc-en-ciel",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 50
                    }
                ]
            }
        ]
    },
    {
        idcategory: 4,
        category: "Pâtes",
        image: Pates,
        specificRegime: [
            {
                idregime:10,
                name: "Rue de la paix",
                specificRegimeName: "Pâtes Classique",
                plat: [
                    {
                        idplat: 28,
                        title: "Carbonara",
                        ingredient: "Tagliatelles, Oeufs, Pancetta, Pecorino, Sel, Poivre",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 29,
                        title: "Bolognaise",
                        ingredient: "Spaghetti, Viande haché, Sauce tomate, Oignons, Sel, Poivre",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 30,
                        title: "Crevettes",
                        ingredient: "Penne, Crevettes, Ail, Oignon, Poivron rouge, Crème fraiche, Sel, Poivre",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            },
            {
                idregime:11,
                name: "Avenue des champs-Elysées",
                specificRegimeName: "Pâtes Veggie",
                plat: [
                    {
                        idplat: 31,
                        title: "Primavera",
                        ingredient: "Liguine, Courgettes, Poivron, Champignon, Crème, Sel, Poivre",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 32,
                        title: "Caponata",
                        ingredient: "Spaghetti, Tomates, Aubergines, Oignon, Ail, Bouillon de légumes, Sel, Poivre",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 33,
                        title: "Puttanesca",
                        ingredient: "Tagliatelle, Olives, Anchois, Ail, Crème",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            }

        ]
    },
    {
        idcategory: 5,
        category: "boisson",
        image: Boisson,
        specificRegime: [
             {
                 idregime:12,
                 name: "",
                 specificRegimeName: "Boissons",
                 plat: [
                     {
                         idplat: 1,
                         title: "Coca",
                         ingredient: "",
                         allergenes:"",
                         price: 50
                     },
                     {
                         idplat: 2,
                         title: "Ice Tea",
                         ingredient: "",
                         allergenes:"",
                         price: 50
                     },
                     {
                         idplat: 3,
                         title: "Oasis",
                         ingredient: "",
                         allergenes:"",
                         price: 50
                     }
 
                 ]
                 
             },
        ]
     },
    {
        idcategory: 6,
        category: "Desserts",
        image: Dessert,
        specificRegime: [
            {
                idregime:13,
                name: "Rue de paradis",
                specificRegimeName: "Glace",
                plat: [
                    {
                        idplat: 34,
                        title: "Glace vanille",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 35,
                        title: "Glace chocolat",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 36,
                        title: "Glace fraise",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            },
            {
                idregime:14,
                name: "Avenue de Neuilly",
                specificRegimeName: "Gateau",
                plat: [
                    {
                        idplat: 37,
                        title: "Gateau chocolat",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 38,
                        title: "Gateau citron",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 39,
                        title: "Flan",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            },
            {
                idregime:15,
                name: "Boulevard de la villette",
                specificRegimeName: "Vieinnoiseries",
                plat: [
                    {
                        idplat: 40,
                        title: "Cookie",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 41,
                        title: "Muffin",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    },
                    {
                        idplat: 42,
                        title: "Donuts",
                        ingredient: "",
                        allergenes:"",
                        price: 50
                    }

                ]
                
            }

        ]
    }

]