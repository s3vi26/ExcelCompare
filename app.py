from flask import Flask
app = Flask(__name__)


@app.route("/")
def hello():
  return "Hello World! This is our first endpoint"

@app.route("/upload")
def uploading():
  # read the uploaded files
  # parse them to JSON
  # throw errors for blank sheets
  # write a fucntion to compare headers/comuns/rows
  # maybe think about if a DB is needed here? 
  return "This is the upload route. omg look at me gooooo"