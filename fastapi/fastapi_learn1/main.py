from fastapi import FastAPI
from fastapi.params import Body
from pydantic import BaseModel

app = FastAPI()

class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None

@app.get("/")
def root():
     return {"message": "Hello World"}  

@app.get("/posts")
def get_posts():
     return {"data": "This is your post"}
 
@app.post("/createposts")
# def creat_posts(payload: dict = Body(...)):
def creat_posts(new_post: Post):
    print(new_post)
    return {"data": "new post"}    

