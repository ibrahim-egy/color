from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from colorthief import ColorThief
import os

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")


@app.route("/result", methods=["POST", "GET"])
def result():
    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join("static/assets/img/", filename))
    full_image_path = f"static/assets/img/{filename}"
    color_thief = ColorThief(full_image_path)
    top_colors = color_thief.get_palette(color_count=11)
    return render_template("result.html", image=full_image_path, top_colors=top_colors)


if __name__ == '__main__':
    app.run(debug=True)




