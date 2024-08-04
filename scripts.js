const recipes = [
    { 
        name: "Chicken Biryani", 
        ingredients: ["Chicken", "Rice", "Spices", "Yogurt", "Onions", "Tomatoes"], 
        procedure: `
            1. Cook chicken with spices and yogurt.
            2. Cook rice separately.
            3. Mix chicken and rice together and simmer.
        ` 
    },
    { 
        name: "Paneer Butter Masala", 
        ingredients: ["Paneer", "Butter", "Cream", "Tomatoes", "Spices", "Onions"], 
        procedure: `
            1. Cook paneer with butter and spices until soft.
            2. Add cream and tomatoes, and simmer until thick.
        ` 
    },
    { 
        name: "Chole Bhature", 
        ingredients: ["Chickpeas", "Flour", "Yogurt", "Onions", "Tomatoes", "Spices"], 
        procedure: `
            1. Cook chickpeas with spices until tender.
            2. Prepare bhature dough, roll out, and deep fry.
        ` 
    },
    { 
        name: "Aloo Gobi", 
        ingredients: ["Potatoes", "Cauliflower", "Spices", "Onions", "Tomatoes"], 
        procedure: `
            1. Cook potatoes and cauliflower with spices until tender.
        ` 
    },
    { 
        name: "Palak Paneer", 
        ingredients: ["Paneer", "Spinach", "Cream", "Spices", "Onions"], 
        procedure: `
            1. Cook spinach with spices and blend to a paste.
            2. Add paneer and cream, and simmer.
        ` 
    },
    { 
        name: "Dosa", 
        ingredients: ["Rice", "Urad Dal", "Fenugreek", "Salt"], 
        procedure: `
            1. Soak rice, urad dal, and fenugreek.
            2. Grind into a smooth batter.
            3. Cook on a hot griddle until crispy.
        ` 
    },
    { 
        name: "Samosa", 
        ingredients: ["Potatoes", "Peas", "Spices", "Flour"], 
        procedure: `
            1. Prepare spiced potato and pea filling.
            2. Make dough, stuff, and deep fry samosas.
        ` 
    },
    { 
        name: "Butter Chicken", 
        ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices"], 
        procedure: `
            1. Cook chicken with butter and spices.
            2. Add tomatoes and cream, and simmer.
        ` 
    },
    { 
        name: "Rogan Josh", 
        ingredients: ["Lamb", "Yogurt", "Spices", "Onions", "Tomatoes"], 
        procedure: `
            1. Brown lamb pieces in a pot.
            2. Add onions, spices, and yogurt, and cook until tender.
        ` 
    },
    { 
        name: "Dal Tadka", 
        ingredients: ["Lentils", "Tomatoes", "Spices", "Onions", "Garlic"], 
        procedure: `
            1. Cook lentils with tomatoes and spices.
            2. Temper with onions and garlic.
        ` 
    },
    { 
        name: "Rava Kesari", 
        ingredients: ["Semolina", "Sugar", "Ghee", "Cashews", "Raisins"], 
        procedure: `
            1. Roast semolina in ghee until golden.
            2. Add sugar and water, and cook until thickened.
            3. Garnish with cashews and raisins.
        ` 
    },
    { 
        name: "Pani Puri", 
        ingredients: ["Semolina", "Flour", "Tamarind", "Chickpeas", "Spices"], 
        procedure: `
            1. Prepare puris from semolina and flour.
            2. Prepare tamarind water and fill puris with chickpeas and water.
        ` 
    },
    { 
        name: "Idli", 
        ingredients: ["Rice", "Urid Dal", "Fermentation Starter"], 
        procedure: `
            1. Soak rice and urid dal.
            2. Grind into a batter and let ferment.
            3. Steam in idli molds.
        ` 
    },
    { 
        name: "Kofta Curry", 
        ingredients: ["Potatoes", "Paneer", "Spices", "Tomatoes", "Onions"], 
        procedure: `
            1. Make koftas from spiced potato and paneer mixture.
            2. Cook in a spiced tomato curry.
        ` 
    },
    { 
        name: "Baingan Bharta", 
        ingredients: ["Eggplant", "Tomatoes", "Onions", "Spices"], 
        procedure: `
            1. Roast eggplant until charred and soft.
            2. Mash and cook with tomatoes and spices.
        ` 
    },
    { 
        name: "Pulao", 
        ingredients: ["Rice", "Vegetables", "Spices", "Onions"], 
        procedure: `
            1. Cook rice with mixed vegetables and spices in one pot.
        ` 
    },
    { 
        name: "Kheer", 
        ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Nuts"], 
        procedure: `
            1. Cook rice in milk until tender.
            2. Add sugar and cardamom.
            3. Garnish with nuts.
        ` 
    },
    { 
        name: "Methi Thepla", 
        ingredients: ["Whole Wheat Flour", "Fenugreek Leaves", "Spices"], 
        procedure: `
            1. Mix fenugreek leaves and spices into whole wheat flour.
            2. Knead into a smooth dough.
            3. Roll out and cook on a griddle until golden brown.
        ` 
    },
    { 
        name: "Prawn Masala", 
        ingredients: ["Prawns", "Tomatoes", "Spices", "Onions"], 
        procedure: `
            1. Sauté onions until golden brown.
            2. Add tomatoes and spices, and cook until the tomatoes break down.
            3. Add prawns and cook until pink and cooked through.
        ` 
    },
    { 
        name: "Vegetable Biryani", 
        ingredients: ["Rice", "Mixed Vegetables", "Spices", "Yogurt"], 
        procedure: `
            1. Partially cook rice and set aside.
            2. Prepare a spiced vegetable mix with yogurt.
            3. Layer rice over the vegetable mix.
            4. Cook covered on low heat until fully cooked.
        ` 
    },
    { 
        name: "Aloo Paratha", 
        ingredients: ["Whole Wheat Flour", "Potatoes", "Spices"], 
        procedure: `
            1. Prepare dough from whole wheat flour.
            2. Make spiced mashed potato filling.
            3. Stuff dough with filling, roll out, and cook on a griddle.
        ` 
    },
    { 
        name: "Mutton Curry", 
        ingredients: ["Mutton", "Tomatoes", "Spices", "Yogurt"], 
        procedure: `
            1. Cook mutton with spices until browned.
            2. Add tomatoes and yogurt, and simmer until tender.
        ` 
    },
    { 
        name: "Methi Malai Chicken", 
        ingredients: ["Chicken", "Fenugreek Leaves", "Cream", "Spices"], 
        procedure: `
            1. Cook chicken with spices.
            2. Add fenugreek leaves and cream, and simmer until cooked through.
        ` 
    },
    { 
        name: "Kachori", 
        ingredients: ["Flour", "Lentils", "Spices"], 
        procedure: `
            1. Prepare a spicy lentil filling.
            2. Stuff the filling into dough balls.
            3. Deep fry until golden brown.
        ` 
    },
    { 
        name: "Bhindi Masala", 
        ingredients: ["Okra", "Tomatoes", "Spices", "Onions"], 
        procedure: `
            1. Sauté onions until soft.
            2. Add spices, tomatoes, and okra.
            3. Cook until okra is tender.
        ` 
    },
    { 
        name: "Palak Chole", 
        ingredients: ["Chickpeas", "Spinach", "Spices", "Onions", "Tomatoes"], 
        procedure: `
            1. Cook chickpeas with spinach and spices.
            2. Blend to a smooth consistency if preferred.
        ` 
    },
    { 
        name: "Rava Dosa", 
        ingredients: ["Semolina", "Rice Flour", "Spices", "Onions"], 
        procedure: `
            1. Mix semolina and rice flour with water and spices.
            2. Cook thin dosas on a hot griddle.
        ` 
    },
    { 
        name: "Kadhi Pakora", 
        ingredients: ["Yogurt", "Chickpea Flour", "Spices", "Onions"], 
        procedure: `
            1. Prepare a yogurt-based curry.
            2. Make chickpea flour fritters (pakoras) and add to the curry.
        ` 
    },
    { 
        name: "Rajma", 
        ingredients: ["Kidney Beans", "Tomatoes", "Spices", "Onions"], 
        procedure: `
            1. Cook kidney beans in a spiced tomato gravy.
        ` 
    },
    { 
        name: "Mango Lassi", 
        ingredients: ["Mango", "Yogurt", "Sugar", "Cardamom"], 
        procedure: `
            1. Blend mangoes with yogurt, sugar, and cardamom until smooth.
        ` 
    },
    { 
        name: "Jeera Rice", 
        ingredients: ["Rice", "Cumin Seeds", "Onions", "Spices"], 
        procedure: `
            1. Cook rice with cumin seeds and spices.
        ` 
    },
    { 
        name: "Paneer Tikka", 
        ingredients: ["Paneer", "Yogurt", "Spices", "Vegetables"], 
        procedure: `
            1. Marinate paneer and vegetables in yogurt and spices.
            2. Skewer and grill or bake.
        ` 
    },
    { 
        name: "Halwa", 
        ingredients: ["Semolina", "Sugar", "Ghee", "Nuts"], 
        procedure: `
            1. Roast semolina in ghee.
            2. Add sugar and water, and cook until thick.
            3. Garnish with nuts.
        ` 
    },
    { 
        name: "Dhokla", 
        ingredients: ["Gram Flour", "Yogurt", "Spices", "Mustard Seeds"], 
        procedure: `
            1. Prepare a batter from gram flour and yogurt.
            2. Steam the batter until cooked.
            3. Temper with mustard seeds and spices.
        ` 
    },
    { 
        name: "Pesarattu", 
        ingredients: ["Green Gram", "Rice", "Ginger", "Spices"], 
        procedure: `
            1. Soak green gram and rice.
            2. Grind into a batter with ginger and spices.
            3. Cook on a griddle.
        ` 
    },
    { 
        name: "Coconut Chutney", 
        ingredients: ["Coconut", "Green Chilies", "Mustard Seeds", "Spices"], 
        procedure: `
            1. Blend coconut with green chilies.
            2. Temper with mustard seeds and spices.
        ` 
    },
    { 
        name: "Aloo Jeera", 
        ingredients: ["Potatoes", "Cumin Seeds", "Spices"], 
        procedure: `
            1. Cook potatoes with cumin seeds and spices until tender.
        ` 
    },
    { 
        name: "Sambhar", 
        ingredients: ["Lentils", "Mixed Vegetables", "Tamarind", "Spices"], 
        procedure: `
            1. Cook lentils with vegetables and tamarind.
            2. Temper with spices.
        ` 
    },
    { 
        name: "Gulab Jamun", 
        ingredients: ["Milk Powder", "Sugar", "Ghee", "Cardamom"], 
        procedure: `
            1. Make dough from milk powder and shape into balls.
            2. Deep fry until golden.
            3. Soak in sugar syrup flavored with cardamom.
        ` 
    },
    { 
        name: "Methi Thepla", 
        ingredients: ["Whole Wheat Flour", "Fenugreek Leaves", "Spices"], 
        procedure: `
            1. Mix fenugreek leaves and spices into whole wheat flour.
            2. Knead into a smooth dough.
            3. Roll out and cook on a griddle until golden brown.
        ` 
    }
];
