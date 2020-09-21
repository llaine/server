import FaceRepository from 'repositories/faceRepository';

describe('FaceRepository', () => {
  it('should have a method get that returns an array of Faces', () => {
    const result = FaceRepository.get();
    expect(result.length).not.toBeNull();
  })
})
