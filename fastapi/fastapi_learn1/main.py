from fastapi import FastAPI
from fastapi.params import Body
from pydantic import BaseModel

app = FastAPI()

class Post(BaseModel)

@app.get("/")
def root():
    return {"message": "Hello World love"}

@app.get("/posts")
def get_posts():
    return {"data": "This is your posts"}

@app.post("/createpost")
def create_post(payload: dict = Body(...)):
    return {"message": "Successfully created posts"}