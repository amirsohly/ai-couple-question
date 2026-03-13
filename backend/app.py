from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

soft_questions = [
"What makes you feel closest to your partner?",
"What small thing your partner does makes you feel loved?"
]

bold_questions = [
"What usually sparks attraction between you two?",
"What playful thing does your partner do that turns you on?"
]

spicy_questions = [
"What kind of flirting from your partner always works?",
"What secret fantasy would you share with your partner?"
]

@app.route("/")
def home():
    return "AI Question API running"

@app.route("/question")
def question():

    level = request.args.get("level","soft")

    if level == "bold":
        q = random.choice(bold_questions)
    elif level == "spicy":
        q = random.choice(spicy_questions)
    else:
        q = random.choice(soft_questions)

    return jsonify({"question": q})


if __name__ == "__main__":
    app.run()