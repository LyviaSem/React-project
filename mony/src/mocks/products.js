export const PRODUCTS = [
    {
       id: 1,
       category:"Burger",
       children: [
        
       ]
    },
    {
        id: 2,
        category: "Pizza",
        children: [

        ]
    },
    {
        id: 3,
        category: "Salade",
        children: [
            {
                id: 1,
                specificRegime: "meat",
                children: [
                    {
                        id: 1,
                        category: "salade",
                        title: "Salade César",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    },
                    {
                        id: 2,
                        category: "salade",
                        title: "Salade Lyonnaise",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    },
                    {
                        id: 3,
                        category: "salade",
                        title: "Salade Savoyarde",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    }
                ]
            },
            {
                id: 2,
                specificRegime: "fish",
                children: [
                    {
                        id: 1,
                        category: "salade",
                        title: "Salade Océane",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    },
                    {
                        id: 2,
                        category: "salade",
                        title: "Salade Norvégiene",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    },
                    {
                        id: 3,
                        category: "salade",
                        title: "Salade Niçoise",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    }
                ]
            },
            {
                id: 3,
                specificRegime: "veggie",
                children: [
                    {
                        id: 1,
                        category: "salade",
                        title: "Salade Greque",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    },
                    {
                        id: 2,
                        category: "salade",
                        title: "Chèvre Chaud",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    },
                    {
                        id: 3,
                        category: "salade",
                        title: "Salade Arc-en-ciel",
                        description: "Ceci est une chaise",
                        allergenes:"",
                        specificRegime:"",
                        price: 50
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        category: "Pâtes",
        children: [

        ]
    },
    {
        id: 5,
        category: "Desserts",
        children: [

        ]
    }

]