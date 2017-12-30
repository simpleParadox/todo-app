const expect = require('expect');
const request = require('supertest'); // Testing request methods.

// Local imports.
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// The assumption is that the databse is empty.
beforeEach((done) => { // this function is gonna get called before each test case.
    Todo.remove({}).then(() =>done()); // This is gonna remove everything from the database.
});


describe('POST /todos', ()=>{ // Describe block to group tests.
    it('should create a todo.',(done) => {
        var text = 'Test todo text';

        // Making a request using supertest. Supertest automatically converts to JSON.
        // Expecting 200 as the status code.
        request(app).post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
    });

    it('should not create todo with invalid body', (done) => {
        request(app).post('/todos')
        .send({})
        .expect(400)
        .end((err,res) => {
            if(err){
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(0);
                done();
            }).catch((e) => done(e));
        });
    });
});
