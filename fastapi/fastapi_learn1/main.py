from typing import Optional
from fastapi import FastAPI, Response, status, HTTPException
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

def find_index_post(id):
     for idx, post in enumerate(my_post):
          if post["id"] == id:
               return idx

@app.get("/")
def root():
     return {"message": "Hello World"}  

@app.get("/posts")
def get_posts():
     return {"data": my_post}
 
@app.post("/posts", status_code=status.HTTP_201_CREATED)
# def creat_posts(payload: dict = Body(...)):
def creat_posts(new_post: Post):
     post_dict = new_post.dict()
     post_dict["id"] = randrange(0, 100000000)
     my_post.append(post_dict) 
     return {"data": post_dict}

@app.get("/posts/{id}")
def get_post(id: int ):
     post = find_post(id)
     
     if not post:
          raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} was not found")
     return {"post_details": post}

@app.delete("/posts/{id}")
def delete_post(id: int):
     index = find_index_post(id)
     
     if not index:
          raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"post with id: {id} was not found")
     
     my_post.pop(index)
     return {"msg": "Post was successfully deleted"}