import os
from flask import Flask, request
from werkzeug.utils import secure_filename
import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = '/Users/Sevi/Downloads'
ALLOWED_EXTENSIONS = set(['xlsx'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/")
def hello():
  return "Hello World! This is our first endpoint"

@app.route("/upload", methods=['POST'])
def uploading():
  # 2 excel files
  if request.method == 'POST':
    print('is a POST method')
    print(request.files)
    if 'fileA' not in request.files or 'fileB' not in request.files:
      return 'files do not exist'
    
    target=os.path.join(UPLOAD_FOLDER,'backend_docs')
    
    if not os.path.isdir(target):
      os.mkdir(target)
    
    fileA = request.files['fileA']
    # read the file
    # parse them to JSON

    fileB = request.files['fileB']
    # read the file
    # parse them to JSON

    # write a fucntion to compare headers/comuns/rows
    # maybe think about if a DB is needed here? 


    # To save file to a destination
    # filename = secure_filename(fileA.filename)
    # destination="/".join([target, filename])
    # fileA.save(destination)
    
    # To save file to a destination
    # filename = secure_filename(fileB.filename)
    # destination="/".join([target, filename])
    # fileB.save(destination)

    return 'you hit the endpoint. files saved'
  else:
    return 'This method needs to be POST'

if __name__ == '__main__':
  # run app in debug mode on port 5000
  app.run(debug=True, port=5000)