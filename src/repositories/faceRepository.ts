import Faker from 'faker';

class FaceRepository {
  get() {
    const faces = Array.from(Array(30).keys());
    return faces.map((_, i) => {
      return {
        id: Faker.random.number(),
        name: Faker.name.findName(),
        avatar: Faker.image.avatar()
      }
    })
  }
}

export default new FaceRepository();
