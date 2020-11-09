#### IMPORT 
from flask import Flask
from flask_cors import CORS 


#### APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and backend
CORS(app)


#### ROUTES
@app.route('/')
def index():
    return 'Hello World'

if __name__ == "__main__":
    app.run(debug=True)

