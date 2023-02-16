import Burger from '../Img/burger.png'
import Pizza from '../Img/pizza.png'
import Salade from '../Img/salade.png'
import Pates from '../Img/pates.png'

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
                menu_price: 14,
                accompaniments: [ 
                    { value: 'Frite', label: 'Frite' },
                    { value: 'Salade', label: 'Salade' },

                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 1,
                        title: "Le Cheddar Poulet",
                        ingredient: ["Oignons", "Cornichons", "Poulet panés", "Cheddar", "Sauce blanche"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
                    },
                    {
                        idplat: 2,
                        title: "Le Mexicain",
                        ingredient: ["Poulet panés", "Guacamole", "Tomates", "Oignon", "Mozarrella"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
                    },
                    {
                        idplat: 3,
                        title: "Le Chèvre Miel",
                        ingredient: ["Poulet panés", "Chèvre", "Sauce au miel", "Salade", "Tomate", "Oignon caramélisé"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
                    }

                ]
                
            },
            {
                idregime:2,
                name: "Boulevard Malesherbes",
                specificRegimeName: "Burger Boeuf",
                menu_price: 14,
                accompaniments: [ 
                    { value: 'Frite', label: 'Frite' },
                    { value: 'Salade', label: 'Salade' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 4,
                        title: "Le Raclette",
                        ingredient: ["Steak haché", "Salade", "Fromage à raclette", "Sauce moutarde à l’ancienne", "Tomates" , "Oignon"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
                    },
                    {
                        idplat: 5,
                        title: "Le Cheeseburger",
                        ingredient: ["Boeuf", "Cornichon", "Tomates", "Cheddar", "Ketchup"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
                    },
                    {
                        idplat: 6,
                        title: "Le Big Breakfast",
                        ingredient: ["Boeuf", "Bacon", "Cheddar", "Oeuf", "Oignon"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
                    }

                ]
                
            },
            {
                idregime:3,
                name: "Avenue Henry-Martin",
                specificRegimeName: "Burger Veggie",
                menu_price: 14,
                accompaniments: [ 
                    { value: 'Frite', label: 'Frite' },
                    { value: 'Salade', label: 'Salade' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 7,
                        title: "Le Chèvre Pané",
                        ingredient: ["Chèvre pané", "Tomates", "Salade", "Sauce blanche"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
                    },
                    {
                        idplat: 8,
                        title: "Le Veggie Mexicain",
                        ingredient: ["Cheddar", "Tomates", "Choux", "Avocat", "Palet de légumes"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
                    },
                    {
                        idplat: 9,
                        title: "Le Veggie Gouda",
                        ingredient: ["Salade", "Gouda", "Oignon", "Sauce moutarde", "Escalope végétarienne"],
                        allergenes:["Gluten, ", "Graine de sésame, ", "Lait"],
                        price: 12
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
                idregime:1,
                name: "Faubourg Saint-Honoré",
                specificRegimeName: "Pizza Napolitaine",
                menu_price: 15,
                accompaniments: [ 
                    { value: 'Sauce piquante', label: 'Sauce piquante' },
                    { value: 'Sans sauce piquante', label: 'Sans sauce piquante' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 10,
                        title: "La Margherita",
                        ingredient: ["Sauce tomate", "Mozzarella", "Basilic", "Huile d’olive"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
                    },
                    {
                        idplat: 11,
                        title: "La Saucisse Italienne",
                        ingredient: ["Sauce tomate", "Mozzarella", "Saucisses italiennes", "Oignons rouge", "Poivrons vert", "origan"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
                    },
                    {
                        idplat: 12,
                        title: "La Légumes Grillés",
                        ingredient: ["Sauce tomate", "Mozzarella", "Aubergines", "Courgettes", "Poivrons rouges", "Oignons rouges", "Origan"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
                    }

                ]
                
            },
            {
                idregime:2,
                name: "Place de la Bourse",
                specificRegimeName: "Pizza Classique",
                menu_price: 15,
                accompaniments: [ 
                    { value: 'Sauce piquante', label: 'Sauce piquante' },
                    { value: 'Sans sauce piquante', label: 'Sans sauce piquante' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 13,
                        title: "La Pepperoni",
                        ingredient: ["Sauce tomate", "Mozzarella", "Pepperoni", "Champigons", "Oignons rouges", "Origan"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
                    },
                    {
                        idplat: 14,
                        title: "La Quatre Fromages",
                        ingredient: ["Sauce tomate", "Gorgonzola", "Roquefort", "Parmesan rapé", "Basilic"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
                    },
                    {
                        idplat: 15,
                        title: "La Jambon Champignons",
                        ingredient: ["Sauce tomate", "Jambon", "Mozzarella", "Champignons", "Origan"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
                    }

                ]
                
            },
            {
                idregime:3,
                name: "Rue Lafayette",
                specificRegimeName: "Calzone",
                menu_price: 15,
                accompaniments: [ 
                    { value: 'Sauce piquante', label: 'Sauce piquante' },
                    { value: 'Sans sauce piquante', label: 'Sans sauce piquante' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 16,
                        title: "La Épinards Mozzarella",
                        ingredient: ["Épinards hachés", "Mozzarella", "Ricotta", "Oignons", "Origan"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
                    },
                    {
                        idplat: 17,
                        title: "La Boursin",
                        ingredient: ["Tomates séchées", "Boursin", "Mozzarella", "Ricotta", "Origa"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
                    },
                    {
                        idplat: 18,
                        title: "La Saumon Fumé",
                        ingredient: ["Saumon fumé", "Mozzarella", "Ricotta", "Oignons", "Origan"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 13
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
                idregime: 1,
                name: "Boulevard des Capucines",
                specificRegimeName: "Salade Viande",
                menu_price: 17,
                accompaniments: [ 
                    { value: 'Pain', label: 'Pain' },
                    { value: 'Sans Pain', label: 'Sans pain' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 19,
                        title: "Salade César",
                        ingredient: ["Salade verte", "Poulet", "Parmesan", "Crouton", "Sauce vinegrette"],
                        allergenes:["lait, ", "Gluten"],
                        price: 15
                    },
                    {
                        idplat: 20,
                        title: "Salade Lyonnaise",
                        ingredient: ["Salade de saison","lard", "Oeuf", "Sauce vinegrette"],
                        allergenes:"aucun",
                        price: 15
                    },
                    {
                        idplat: 21,
                        title: "Salade Savoyarde",
                        ingredient: ["Salade verte", "Tomate", "Champignon", "Jambon", "Pignon", "Crouton", "Fromage à raclette"],
                        allergenes:["Gluteen, ", "Lait"],
                        price: 15
                    }
                ]
            },
            {
                idregime: 2,
                name: "Avenue Foch",
                specificRegimeName: "Salade Poisson",
                menu_price: 17,
                accompaniments: [ 
                    { value: 'Pain', label: 'Pain' },
                    { value: 'Sans Pain', label: 'Sans pain' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 22,
                        title: "Salade Océane",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 15
                    },
                    {
                        idplat: 23,
                        title: "Salade Norvégiene",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 15
                    },
                    {
                        idplat: 24,
                        title: "Salade Niçoise",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 15
                    }
                ]
            },
            {
                idregime: 3,
                name: "Avenue de Breteuil",
                specificRegimeName: "Salade Veggie",
                menu_price: 17,
                accompaniments: [ 
                    { value: 'Pain', label: 'Pain' },
                    { value: 'Sans Pain', label: 'Sans pain' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 25,
                        title: "Salade Greque",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 15
                    },
                    {
                        idplat: 26,
                        title: "Salade Chèvre Chaud",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 15
                    },
                    {
                        idplat: 27,
                        title: "Salade Arc-en-ciel",
                        ingredient: "Ceci est une chaise",
                        allergenes:"",
                        price: 15
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
                idregime:1,
                name: "Rue de la paix",
                specificRegimeName: "Pâtes Classique",
                menu_price: 22,
                accompaniments: [ 
                    { value: 'Parmesan', label: 'Parmasan' },
                    { value: 'Sans Parmesan', label: 'Sans parmesant' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 28,
                        title: "Carbonara",
                        ingredient: ["Tagliatelles", "Oeufs", "Pancetta", "Pecorino", "Sel", "Poivre"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 20
                    },
                    {
                        idplat: 29,
                        title: "Bolognaise",
                        ingredient: ["Spaghetti", "Viande haché", "Sauce tomate", "Oignons", "Sel", "Poivre"],
                        allergenes:["Gluten"],
                        price: 20
                    },
                    {
                        idplat: 30,
                        title: "Crevettes",
                        ingredient: ["Penne", "Crevettes", "Ail", "Oignon", "Poivron rouge", "Crème fraiche", "Sel", "Poivre"],
                        allergenes:["Gluten, ", "Lait, ", "Crevette"],
                        price: 20
                    }

                ]
                
            },
            {
                idregime:2,
                name: "Avenue des champs-Elysées",
                specificRegimeName: "Pâtes Veggie",
                menu_price: 22,
                accompaniments: [ 
                    { value: 'Parmesan', label: 'Parmasan' },
                    { value: 'Sans Parmesan', label: 'Sans parmesant' }
                ],
                desserts:[ 
                    { value: 'Donuts', label: 'Donuts' },
                    { value: 'Mufin', label: 'Mufin' },
                    { value: 'Glace', label: 'Glace' }
                ],
                boissons: [
                    { value: 'Coca-Cola', label: 'Coca-Cola' },
                    { value: 'Icetea', label: 'Icetea' },
                    { value: 'Sprite', label: 'Sprite' },
                    { value: 'Oasis', label: 'Oasis' },
                    { value: 'Orangina', label: 'Orangina' }
                ],
                plat: [
                    {
                        idplat: 31,
                        title: "Primavera",
                        ingredient: ["Liguine", "Courgettes", "Poivron", "Champignon", "Crème", "Sel", "Poivre"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 20
                    },
                    {
                        idplat: 32,
                        title: "Caponata",
                        ingredient: ["Spaghetti", "Tomates", "Aubergines", "Oignon", "Ail", "Bouillon de légumes", "Sel", "Poivre"],
                        allergenes:["Gluten"],
                        price: 20
                    },
                    {
                        idplat: 33,
                        title: "Puttanesca",
                        ingredient: ["Tagliatelle", "Olives", "Anchois", "Ail", "Crème"],
                        allergenes:["Gluten, ", "Lait"],
                        price: 20
                    }

                ]
                
            }

        ]
    },

]