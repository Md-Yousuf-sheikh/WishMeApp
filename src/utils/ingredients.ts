//  export const allMicroNeutronsByIngredient = res.ingredients.map(item => {
//   const data = item.micronutrient.map(item => {
//     const gram = convertToGram(item.unit, item.quantity);
//     return {
//       quantity: gram,
//       unit: 'g',
//       name: item.name,
//     };
//   });

//   const groupByMicroNutrient = data.reduce(
//     (acc, curr) => {
//       if (acc[curr.name]) {
//         acc[curr.name].quantity += convertToGram(curr.unit, curr.quantity);
//       } else {
//         acc[curr.name] = {
//           name: curr.name,
//           quantity: convertToGram(curr.unit, curr.quantity),
//           unit: 'g',
//         };
//       }
//       return acc;
//     },
//     {} as {
//       [key in TMicronutrient['name']]: TMicronutrient;
//     },
//   );

//   return Object.values(groupByMicroNutrient);
// });

// const allMicroNutrients = allMicroNeutronsByIngredient.flat().reduce(
//   (acc, curr) => {
//     if (acc[curr.name]) {
//       acc[curr.name].quantity += convertToGram(curr.unit, curr.quantity);
//     } else {
//       acc[curr.name] = {
//         name: curr.name,
//         quantity: convertToGram(curr.unit, curr.quantity),
//         unit: 'g',
//       };
//     }
//     return acc;
//   },
//   {} as {
//     [key in TMicronutrient['name']]: TMicronutrient;
//   },
// );
// function convertToGram(unit: any, quantity: any) {
//     throw new Error("Function not implemented.");
// }
