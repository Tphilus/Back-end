from fastapi import FastAPI
from fastapi.params import Body

app = FastAPI()

@app.get("/")
def root():
     return {"message": "Hello World"}  

@app.get("/posts")
def get_posts():
     return {"data": "This is your post"}
 
@app.post("/creatpost")
def creat_posts(payload: dict = Body(...)):
    return {"message":"Successfully created a posts"}    
      