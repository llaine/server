import Faker from 'faker';

class FaceRepository {
  get() {
    const faces = Array.from(Array(30).keys());
    return faces.map((_, i) => {
      return {
        id: Faker.random.number(),
        name: Faker.name.findName(),
        avatar: `https://i.pravatar.cc/150?img=${i}`
      }
    })
  }
}

export default new FaceRepository();
