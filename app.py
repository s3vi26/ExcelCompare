from flask import Flask, request
app = Flask(__name__)


@app.route("/")
def hello():
  return "Hello World! This is our first endpoint"

@app.route("/upload", methods=['POST'])
def uploading():
  # 2 excel files
  if request.method == 'POST':
    print('is a POST method')
    if 'fileA' not in request.files:
      return 'files dont exist'
    return 'you hit the endpoint. files exist'
  else:
    return 'This method needs to be POST'
  # read the uploaded files
  # parse them to JSON
  # throw errors for blank sheets
  # write a fucntion to compare headers/comuns/rows
  # maybe think about if a DB is needed here? 