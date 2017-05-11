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
  it("should not creat an invalid new todo", (done) => {
    let text = 'e';
    request(app)
      .post('/todos')
      .send({text})
      .expect(400)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.errors.text.message).toBe("Path `text` (`e`) is shorter than the minimum allowed length (4).");
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(todoSeeds.length);
          done();
        }).catch((e) => done(e));
      })
  });
});

describe('GET /todos', () =>{
  it("should return todos los todos in the db", (done) => {
    request(app)
      .get("/todos")
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) =>{
        expect(res.body.todos.length).toBe(todoSeeds.length);
      })
      .end(done);
  });
});

describe("GET /todos/:id", () => {
  it ("should retrieve one todo given a correct id", (done) =>{
    //test here
  });
  it ("should 404 on an invalid mongo id", (done) =>{
    //test here
  });
  it ("should 404 on an valid id that is not in the db", (done) =>{
    //test here
  });
});