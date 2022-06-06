import Person from "../repositories/PersonRepository";

const getById = async (id: number) => {
  try {
    let result = await Person.readById(id);
    console.log(result);

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default { getById };
