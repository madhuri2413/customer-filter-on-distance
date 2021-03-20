import request from 'supertest';
import app from '../server';
describe('test the customer route for failed validation', () => {
  it('should fail the validation for queryparams', async () => {
    const res = await request(app).get('/intercom/customers');
    expect(res.status).toBe(400);
  });
});
