const buyChocolate = () => {
  const  chocolateObject = {
        type: "milk Chocolate"
    }

    return chocolateObject
}
 
const chocolate = buyChocolate()

// console.log(chocolate)


const addFlavoring = (flavorObject) => {
    flavorObject.flavor = "Mint"

    return flavorObject

}

const flavor = addFlavoring(chocolate)


const makeBarkMixture = (barkObject) => {
    if (barkObject.flavor === "mint" ) {
        barkObject.mixed = true;
    } else {
        barkObject.mixed = false;
    }

    return barkObject
}

const barkMix = makeBarkMixture(flavor)

console.log(barkMix)

const bakeCandy = (bakeObject) => {
    if (bakeObject.mixed = true) {
        bakeObject.baked = true;
    } else {
        bakeObject.baked = false;
    }

        return bakeObject
}

const baked = bakeCandy(barkMix)

console.log(barkMix)

const breakBark = (breakObject) => {
    if (breakObject.baked === true) 
        return ["Mint Chocolate Bark Peice",
                "Mint Chocolate Bark Peice",
                "Mint Chocolate Bark Peice",
                "Mint Chocolate Bark Peice",
                "Mint Chocolate Bark Peice",
                "Mint Chocolate Bark Peice",
                "Mint Chocolate Bark Peice"]
    
}

const peices = breakBark(baked)

console.log(peices)