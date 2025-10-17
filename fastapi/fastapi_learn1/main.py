from typing import Optional
from fastapi import FastAPI
from fastapi.params import Body
from pydantic import BaseModel
from random import randrange

app = FastAPI()

class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None
    
my_post = [{"title": "itle of post 1", "content": "Content of post 1", "id": 1}, {"title": "Favorite food", "content": "I like rice", "id": 2},]

def find_post(id):
     for post in my_post:
          if post["id"] == id: 
               return post

@app.get("/")
def root():
     return {"message": "Hello World"}  

@app.get("/posts")
def get_posts():
     return {"data": my_post}
 
@app.post("/posts")
# def creat_posts(payload: dict = Body(...)):
def creat_posts(new_post: Post):
     post_dict = new_post.dict()
     post_dict["id"] = randrange(0, 100000000)
     my_post.append(post_dict) 
     return {"data": post_dict}

@app.get("/posts/{id}")
def get_post(id: int):
     post = find_post(id)
     return {"post_details": post}