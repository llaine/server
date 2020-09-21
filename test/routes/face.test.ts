import FaceRepository from 'repositories/faceRepository';
import app from 'server';
import supertest from 'supertest';

describe('Face API', () => {
  const http = supertest.agent(app);
  const url = '/faces';
  it('should return a 200 with an array of faces', (done) => {
    const results = [
      { name: 'name 1', id: 1, avatar: 'avatar 1' },
      { name: 'name 2', id: 2, avatar: 'avatar 2' },
      { name: 'name 3', id: 3, avatar: 'avatar 3' },
    ];

    spyOn(FaceRepository, 'get').and.returnValue(results);

    http.get(url)
      .end((err, response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual(results);
        done();
      })
  })

  it('should return a json object in case of error', (done) => {
    const error = 'Could not fetch faces';
    spyOn(FaceRepository, 'get').and.throwError(error);
    
    http.get(url)
      .end((err, response) => {
        expect(response.status).toBe(500);
        done();
      })
  })
})
