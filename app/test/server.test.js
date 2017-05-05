const expect = require('expect');
const request = require('supertest');
const ObjectId = require("mongoose").Types.ObjectId;

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todoSeeds = [
  {text: "hi number 1", _id: new ObjectId(), completed: true, completedAt: 183298 },
  {text: "hi number 2", _id: new ObjectId() },
  {text: "hi number 3", _id: new ObjectId() }
];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todoSeeds);
  }).then(() => done());
})




describe('POST /todos', () =>{
  it("should create a new todo given valid parameters", () => {
    let text = 'Text there!';
    request(app)
      .post('/todos')
      .send({text})
      .expect(201)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(todoSeeds.length + 1);
          expect(todos[3].text).toBe(text);
        }).catch((e) => done(e));
      })
  });
});