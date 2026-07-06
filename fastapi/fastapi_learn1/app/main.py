from fastapi import FastAPI, Response, status, HTTPException, Depends
from fastapi.params import Body
from pydantic import BaseModel
from random import randrange
from typing import Optional, List

# For Postgres connections 
import psycopg2
from psycopg2.extras import RealDictCursor
import time
# End of Postgres Connections 

#Database Import
from sqlalchemy.orm import Session
from . import models
from .database import engine

from .routes import post, user, auth
models.Base.metadata.create_all(bind=engine)
# End of Database Import

app = FastAPI()


# Postgres Connection 
while True:
    try:
        conn = psycopg2.connect(host='localhost', database='fastapi', user='postgres', password='Password.', cursor_factory=RealDictCursor)
        cursor = conn.cursor()
        print("Database connection was succesfull!")
        break
    except Exception as error:
        print("Connecting to database failed")
        print("Error: ", error)
        time.sleep(2)

my_posts = [
    {"title": "Title of post 1", "content": "content of post 1", "id": 1},
    {"title": "Title of post 2", "content": "content of post 2", "id": 2}
]
  
def find_post(id):
    for p in my_posts:
        if p["id"] == id:
            return p
        
def find_index_post(id):
    for i, p in enumerate(my_posts):
        if p["id"] == id:
            return i
        
app.include_router(post.router)
app.include_router(user.router)
app.include_router(auth.router)


@app.get("/")
def root():
    return {"message": "Hello World"}

    