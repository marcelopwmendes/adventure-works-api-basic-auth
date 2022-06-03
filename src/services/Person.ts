import Person from "../models/Person";

const get = async () => {
  try {
    let result = await Person.read();
    console.log(result);
    
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default { get };
