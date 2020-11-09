#### IMPORT 
from flask import Flask
from flask_cors import CORS 
from summarizer import Summarizer


#### APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and backend
CORS(app)


#### ROUTES
@app.route('/<string:text>/<float:ratio>', methods=['POST'])
def summarizeText(text, ratio):
    model = Summarizer()
    #result = model(text, num_sentences=3)
    result = model(text, ratio=ratio)
    return result

if __name__ == "__main__":
    app.run(debug=True)

